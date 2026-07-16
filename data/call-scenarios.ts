export interface DialogueLine {
  speaker: "caller" | "equal";
  text: string;
}

export interface Summary {
  title: string;
  text: string;
  action: string;
}

export interface Scenario {
  id: string;
  header: string;
  subline: string;
  callerName: string;
  callerLabel: string;
  hasAudio: boolean;
  dialogue: DialogueLine[];
  summary: Summary;
}

export const scenarios: Record<string, Scenario> = {
  pitcher: {
    id: "pitcher",
    header: "Some calls deserve a polite no.",
    subline: "Watch Equal hear the pitch, push back on price, and brief Keshav with the verdict. The call plays as it would in real life.",
    callerName: "HDFC Card Sales",
    callerLabel: "Incoming call",
    hasAudio: true,
    dialogue: [
      { speaker: "caller", text: "Sir, calling from HDFC Bank. Offering Keshav our Diners Club Black card." },
      { speaker: "equal", text: "Thanks. Quick — what's the credit limit and cashback rate?" },
      { speaker: "caller", text: "Limit up to 3 lakhs, 2% cashback on dining." },
      { speaker: "equal", text: "Got it. Keshav uses cards above 5 lakhs with 10%+ cashback. This doesn't fit." },
      { speaker: "caller", text: "Okay sir, no problem." },
      { speaker: "equal", text: "Thanks for understanding. Have a good day." }
    ],
    summary: {
      title: "11:42 AM · Call Declined",
      text: "HDFC offered Diners Club Black. 3L limit, 2% cashback — doesn't meet your criteria.",
      action: "No action needed."
    }
  },
  family: {
    id: "family",
    header: "Some calls deserve your full warmth.",
    subline: "Watch Equal answer in Hindi, check Keshav's calendar, and plan Sunday lunch. The call plays as it would in real life.",
    callerName: "Mom",
    callerLabel: "Incoming call",
    hasAudio: false,
    dialogue: [
      { speaker: "caller", text: "Hello beta, Keshav hai?" },
      { speaker: "equal", text: "Aunty namaste. Keshav abhi meeting mein hai. Aap kaisi hain?" },
      { speaker: "caller", text: "Theek hoon. Bolna usse Sunday ko ghar aana hai. Khaana banaungi." },
      { speaker: "equal", text: "Ji aunty. Sunday Keshav free hai. Ginger garlic chicken?" },
      { speaker: "caller", text: "Haan haan, tumhe yaad hai!" },
      { speaker: "equal", text: "Bilkul aunty. Keshav ko bata dungi." }
    ],
    summary: {
      title: "11:42 AM · Family Call",
      text: "Mom called for Sunday lunch — ginger garlic chicken. Keshav's calendar is free.",
      action: "Lunch added to Sunday calendar."
    }
  },
  stranger: {
    id: "stranger",
    header: "Some calls deserve to be reported.",
    subline: "Watch Equal see through the script, refuse the OTP, and report the number. The call plays as it would in real life.",
    callerName: "Unknown Number",
    callerLabel: "Incoming call",
    hasAudio: false,
    dialogue: [
      { speaker: "caller", text: "Sir main SBI Bank se. Suspicious activity. Turant OTP share kariye." },
      { speaker: "equal", text: "Sir, no bank asks for OTP over phone. Employee ID kya hai?" },
      { speaker: "caller", text: "Sir verification ke liye OTP zaroori hai..." },
      { speaker: "equal", text: "Name aur designation? Main SBI directory check kar raha hoon." },
      { speaker: "caller", text: "..." },
      { speaker: "equal", text: "Call ended. Number reported to cybercrime portal." }
    ],
    summary: {
      title: "11:42 AM · Fraud Blocked",
      text: "Caller posed as SBI Bank, requested OTP. Equal exposed the scam.",
      action: "Number flagged. Reported to cybercrime."
    }
  },
  client: {
    id: "client",
    header: "Some calls deserve a real answer.",
    subline: "Watch Equal check availability, book the meeting, and send the invite to both. The call plays as it would in real life.",
    callerName: "Ravi · Acme Corp",
    callerLabel: "Incoming call",
    hasAudio: false,
    dialogue: [
      { speaker: "caller", text: "Hi, can Keshav meet Thursday 3 PM to discuss the proposal?" },
      { speaker: "equal", text: "Let me check… Thursday 3 PM, he has a 30-minute window. Your email?" },
      { speaker: "caller", text: "ravi@acme.com" },
      { speaker: "equal", text: "Sending invite — Thursday 3:00 to 3:30 PM. Zoom link included." },
      { speaker: "caller", text: "Perfect. I'll send an agenda." },
      { speaker: "equal", text: "Great. Calendar blocked. Keshav will review your agenda." }
    ],
    summary: {
      title: "11:42 AM · Meeting Booked",
      text: "Ravi from Acme Corp confirmed Thursday 3 PM. Calendar blocked.",
      action: "Review Ravi's agenda before Thursday."
    }
  },
  courier: {
    id: "courier",
    header: "Some calls deserve a quick reply.",
    subline: "Watch Equal coordinate with the watchman, confirm the drop, and brief Keshav. The call plays as it would in real life.",
    callerName: "Zomato Delivery",
    callerLabel: "Incoming call",
    hasAudio: false,
    dialogue: [
      { speaker: "caller", text: "Hello sir, Zomato delivery. Main gate pe hoon." },
      { speaker: "equal", text: "Hi, Keshav meeting mein hai. Watchman ko de do, order number bolo." },
      { speaker: "caller", text: "Order number 3847, biryani aur dal." },
      { speaker: "equal", text: "Theek hai. Watchman ko bata diya — 3847 receive karega." },
      { speaker: "caller", text: "Ok sir." },
      { speaker: "equal", text: "Done. Keshav ko notify kar diya." }
    ],
    summary: {
      title: "11:42 AM · Delivery Handled",
      text: "Zomato delivered order #3847 — left with watchman.",
      action: "Collect from reception."
    }
  }
};
