import { useState } from "react";
import { ArrowLeft, FilePlus2, Home, Upload } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateMedicalRecord() {
  const navigate = useNavigate();

  const [symptoms, setSymptoms] = useState("");
  const [duration, setDuration] = useState("");
  const [report, setReport] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Report is optional.
    // If the user selected a PDF, it is available in `report`.
    console.log("Symptoms:", symptoms);
    console.log("Duration:", duration);
    console.log("Report:", report);

    navigate("/medical-records");
  };

  const handleReportChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setReport(null);
      return;
    }

    // Allow PDF files only
    if (file.type !== "application/pdf") {
      alert("Please select a PDF file only.");
      event.target.value = "";
      setReport(null);
      return;
    }

    setReport(file);
  };

  return (
    <div className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-8">
      <div className="mx-auto w-full max-w-2xl">

        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <Link
            to="/medical-records"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Medical Records
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="mt-14 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
            <FilePlus2 className="h-7 w-7" />
          </div>

          <h1 className="mt-4 text-2xl font-bold tracking-tight">
            Create Medical Record
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Add the details of your current health concern.
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-lg shadow-primary/5 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Main Symptoms */}
            <div className="space-y-2">
              <Label htmlFor="main-symptoms">
                Main Symptoms
              </Label>

              <textarea
                id="main-symptoms"
                value={symptoms}
                onChange={(event) => setSymptoms(event.target.value)}
                placeholder="Describe your main symptoms"
                className="flex min-h-32 w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              />
            </div>

            {/* Duration of Symptoms */}
            <div className="space-y-2">
              <Label htmlFor="symptom-duration">
                Duration of Symptoms
              </Label>

              <Input
                id="symptom-duration"
                type="text"
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
                placeholder="e.g. 3 days, 2 weeks"
                required
              />
            </div>

            {/* Medical Report - Optional */}
            <div className="space-y-2">
              <Label htmlFor="medical-report">
                Medical Report{" "}
                <span className="text-muted-foreground">
                  (Optional)
                </span>
              </Label>

              <div className="relative">
                <Input
                  id="medical-report"
                  type="file"
                  accept="application/pdf,.pdf"
                  onChange={handleReportChange}
                  className="cursor-pointer"
                />
              </div>

              <p className="text-xs text-muted-foreground">
                PDF format only. You can leave this field empty.
              </p>

              {/* Selected File */}
              {report && (
                <div className="flex items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-2 text-sm">
                  <Upload className="h-4 w-4 text-primary" />

                  <span className="truncate">
                    {report.name}
                  </span>
                </div>
              )}
            </div>

            {/* Save Medical Record */}
            <Button
              type="submit"
              size="lg"
              className="w-full"
            >
              Save Medical Record
            </Button>

          </form>
        </div>
      </div>
    </div>
  );
}