import { useState } from "react";
import { useParams } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import MainLayout from "../components/MainLayout";
import TopBar from "../components/TopBar";
import AlertsList from "../components/AlertsList";
import AlertDetails from "../components/AlertDetails";
import StatCard from "../components/StatCard";

// ⬇️ NEW: import your dashboardData
import dashboardData from "../components/dashboardData"; // <-- change path if needed

export default function QuadrantDetail() {
  const { quadrantId } = useParams();
  const [selectedAlertId, setSelectedAlertId] = useState(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // 🔁 Map your existing route IDs to the new dashboardData IDs
  const quadrantIdMap = {
    "cash-liquidity": "cash_sweep",
    "account-setup": "governance",
    "payment-templates": "templates",
    "limits-policy": "risk_policy",
  };

  const internalQuadrantId = quadrantIdMap[quadrantId] || quadrantId;

  const allQuadrants = dashboardData.dashboard?.quadrants || [];
  const allAlerts = dashboardData.alerts || [];

  // Find the quadrant metadata from dashboardData
  const quadrantMeta = allQuadrants.find(
    (q) => q.id === internalQuadrantId
  );

  // Build the alerts array in the SAME shape your UI expects
  const quadrantAlerts = allAlerts
    .filter((alert) => alert.quadrantId === internalQuadrantId)
    .map((alert) => ({
      id: alert.id,
      priority: alert.priority,
      title: alert.title,
      summary: alert.summary,
      // map the new "details" field to the existing "explanation"
      explanation: alert.details,
      // these may not exist in dashboardData, so default safely
      recommendation: alert.recommendation || "",
      category: alert.category || "",
      // map "accountsInvolved" -> "accounts" for AlertDetails
      accounts: alert.accountsInvolved || [],
      status: alert.status,
    }));

  const currentQuadrant = quadrantMeta
    ? {
        title: quadrantMeta.title,
        // use the quadrant summary as the description
        description: quadrantMeta.summary,
        alerts: quadrantAlerts,
      }
    : {
        title: "Unknown Quadrant",
        description: "Quadrant not found",
        alerts: [],
      };

  const selectedAlert =
    currentQuadrant.alerts.find((a) => a.id === selectedAlertId) ||
    currentQuadrant.alerts[0] ||
    null;

  const topBar = (
    <TopBar
      title={currentQuadrant.title}
      description={currentQuadrant.description}
      quadrantId={quadrantId}
      onAssistantOpen={() => setIsAssistantOpen(true)}
    />
  );

  return (
    <MainLayout
      topBar={topBar}
      isAssistantOpen={isAssistantOpen}
      onAssistantClose={() => setIsAssistantOpen(false)}
    >
      {/* Stats Section */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard
          label="Total Alerts"
          value={currentQuadrant.alerts.length}
          variant="total"
        />
        <StatCard
          label="Critical (P1)"
          value={currentQuadrant.alerts.filter((a) => a.priority === "P1").length}
          variant="critical"
          animate={true}
        />
        <StatCard
          label="Warning (P2)"
          value={currentQuadrant.alerts.filter((a) => a.priority === "P2").length}
          variant="warning"
        />
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Alerts List */}
        <div className="lg:col-span-1">
          <AlertsList
            alerts={currentQuadrant.alerts}
            selectedAlertId={
              selectedAlertId || currentQuadrant.alerts[0]?.id
            }
            onSelectAlert={setSelectedAlertId}
          />
        </div>

        {/* Right Column - Alert Details */}
        <div className="lg:col-span-2">
          <AlertDetails alert={selectedAlert} />
        </div>
      </div>

      {/* Mobile Assistant Button */}
      <button
        onClick={() => setIsAssistantOpen(true)}
        className="md:hidden fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-lg z-20"
      >
        <HelpCircle size={20} />
      </button>
    </MainLayout>
  );
}
