import { useState } from "react";
import { ArrowLeft, FilePlus2, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateMedicalRecord() {
  const navigate = useNavigate();
  const [symptoms, setSymptoms] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/medical-records");
  };

  return (
    <div className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex items-center justify-between">
          <Link to="/medical-records" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent">
            <ArrowLeft className="h-4 w-4" />
            Medical Records
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent">
            <Home className="h-4 w-4" />
            Home
          </Link>
        </div>

        <div className="mt-14 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
            <FilePlus2 className="h-7 w-7" />
          </div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight">Create Medical Record</h1>
          <p className="mt-2 text-sm text-muted-foreground">Add the details of your current health concern.</p>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-lg shadow-primary/5 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="main-symptoms">Main Symptoms</Label>
              <textarea
                id="main-symptoms"
                value={symptoms}
                onChange={(event) => setSymptoms(event.target.value)}
                placeholder="Describe your main symptoms"
                className="flex min-h-32 w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="symptom-duration">Duration of Symptoms</Label>
              <Input
                id="symptom-duration"
                type="text"
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
                placeholder="e.g. 3 days, 2 weeks"
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">Save Medical Record</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
