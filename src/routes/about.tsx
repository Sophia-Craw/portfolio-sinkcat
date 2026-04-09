import Footer from "~/components/Footer";

export default function About() {
  return (
    <div class="flex flex-col gap-5">
      <main class="p-10 pt-30 pl-20 pr-20 bg-base-100 flex flex-col justify-center w-full">
        <h1 class="border-b border-zinc-800 font-extrabold text-5xl pb-4 animate-fade-up">About My Work</h1>
        <p class="pt-10 text-zinc-300 animate-fade-up animate-delay-100">While I don't have experience with a job of any kind yet, I always work my hardest and try my best to do the best work I can and with a good amount of speed. I almost always am working on some sort of personal project or hobby whether it involve, music, art, programming or any other thing I decide to try. I believe I have a good work ethic and can deliver things in a timely manner.</p>
        <p class="pt-10 text-zinc-300 animate-fade-up animate-delay-200">Usually I can create a functional piece of software, a form of music or art, in about a week and sometimes even a day and that's without using AI. In terms of AI use though I do sometimes use my own LLM to help me when I'm exploring something new or forget. Usually, though I look up documentation and have no troubles reading it.</p>
        <p class="pt-10 text-zinc-300 animate-fade-up animate-delay-300">I have a deep passion for creating and I believe I bring my skills into a professional world.</p>
      </main>
      <Footer />
    </div>
  );
}
