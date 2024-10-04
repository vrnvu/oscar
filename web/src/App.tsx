import './App.css'
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InputAreaCard from './components/InputAreaCard'
import { Toaster } from './components/ui/toaster';


const EXAMPLE_TEXT_1 = ` 
SPEAKER_01 (0.0, 15.5) Welcome to our product planning meeting. Today, we'll be discussing four key features for our app and deciding which ones to prioritize for the upcoming sprint. Let's start by reviewing the proposed features.
SPEAKER_00 (15.5, 30.2) Sounds good. The four features we're considering are: user authentication improvements, a new dashboard design, push notifications, and integration with third-party APIs. Each of these could significantly enhance our app's functionality and user experience.
SPEAKER_01 (30.2, 45.7) Great summary. Let's dive into each one. First, the user authentication improvements. This would involve implementing two-factor authentication and social media login options. What are your thoughts on this feature?
SPEAKER_00 (45.7, 60.3) I think it's crucial for security and user convenience. However, it might require more time than we have in a single sprint. We should consider the complexity and potential impact on our existing systems.
SPEAKER_01 (60.3, 75.8) Valid points. Moving on to the new dashboard design, this would involve a complete overhaul of our main user interface. How do you think this aligns with our current priorities?
SPEAKER_00 (75.8, 90.5) The new dashboard could greatly improve user engagement, but it's a big undertaking. We'd need to involve our UX team and conduct user testing, which might extend beyond a single sprint.
SPEAKER_01 (90.5, 105.2) Agreed. Now, let's discuss push notifications. This feature would allow us to send targeted messages to users, potentially increasing retention and engagement. What's your take on this?
SPEAKER_00 (105.2, 120.7) Push notifications seem like a high-impact, relatively low-effort feature. We already have the backend infrastructure in place, so implementation could be straightforward. This could be a good candidate for the upcoming sprint.
SPEAKER_01 (120.7, 135.3) That makes sense. Lastly, let's consider the third-party API integrations. This would allow our app to connect with popular services our users already use. How do you see this fitting into our roadmap?
SPEAKER_00 (135.3, 150.0) API integrations could add a lot of value, and we can start with one or two key services. It's a manageable scope for a sprint and could significantly enhance our app's functionality. I think this, along with push notifications, should be our focus for the next sprint.
`;

const EXAMPLE_TEXT_2 = `
SPEAKER_01 (0.0, 10.5) Welcome to our daily standup. Let's quickly go through our progress and any blockers. Who wants to start?
SPEAKER_02 (10.5, 25.2) I'll go first. Yesterday, I completed the user authentication module. Today, I'm starting on the dashboard redesign. No blockers at the moment.
SPEAKER_03 (25.2, 40.7) Great. I'm still working on the API integration. I hit a snag with the third-party documentation, but I think I've figured it out now. Should be done by tomorrow.
SPEAKER_01 (40.7, 55.3) Thanks for the updates. I'll be focusing on the upcoming sprint planning today. Let me know if anyone needs help with anything.
`;

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-muted/80 px-4 md:px-6">
        <h1 className="mb-4">oscar</h1>
      </header>

      <Separator className="mb-4" />

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/80 p-4 md:gap-8 md:p-10">
        <Tabs defaultValue="example1" className="mb-4">
          <TabsList>
            <TabsTrigger value="example1">Example 1</TabsTrigger>
            <TabsTrigger value="example2">Example 2</TabsTrigger>
          </TabsList>
          <TabsContent value="example1">
            <InputAreaCard example={EXAMPLE_TEXT_1} />
          </TabsContent>
          <TabsContent value="example2">
            <InputAreaCard example={EXAMPLE_TEXT_2} />
          </TabsContent>
        </Tabs>
        <Toaster />
      </main>
    </div >
  )
}

export default App
