import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Construct CSV row
    const timestamp = new Date().toISOString();
    
    // Convert arrays into a string separated by pipes so it doesn't break CSV columns
    const leadSources = Array.isArray(data.lead_sources) ? data.lead_sources.join(" | ") : data.lead_sources || "";
    
    const row = [
      timestamp,
      `"${data.business_type || ""}"`,
      `"${data.enquiry_volume || ""}"`,
      `"${leadSources}"`,
      `"${data.biggest_leak || ""}"`,
      `"${data.desired_setup || ""}"`,
      `"${data.readiness || ""}"`,
      `"${data.fit_result || ""}"`,
      `"${data.priority || ""}"`,
    ].join(",");
    
    const filePath = path.join(process.cwd(), 'data', 'quiz-results.csv');
    const dirPath = path.dirname(filePath);
    
    // Ensure the data directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // If file doesn't exist, create it with a header, otherwise append
    const fileExists = fs.existsSync(filePath);
    if (!fileExists) {
      const header = "timestamp,business_type,enquiry_volume,lead_sources,biggest_leak,desired_setup,readiness,fit_result,priority\n";
      fs.writeFileSync(filePath, header + row + "\n", 'utf8');
    } else {
      fs.appendFileSync(filePath, row + "\n", 'utf8');
    }
    
    return NextResponse.json({ success: true, message: "Data saved successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error saving quiz data:", error);
    return NextResponse.json({ success: false, error: "Failed to save data" }, { status: 500 });
  }
}
