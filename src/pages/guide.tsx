import Head from 'next/head';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';


const GuidePage = () => {
  return (
    <main className='min-h-[100svh] flex flex-col p-4 gap-2'>
      <Head>
        <title>Alcuin Scrapper</title>
      </Head>

      <Link href="/" className="flex items-center gap-2">
        <ArrowLeft strokeWidth={1.5} /> Retour à l&apos;accueil
      </Link>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Guide d&apos;installation</h1>

      {/* <p>Bienvenue sur le guide d&apos;installation, il est nécessaire pour tous les tutoriels d&apos;avoir au préalable copié le liens correspondant à sa formation.</p> */}

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Apple Calendar</AccordionTrigger>
          <AccordionContent>
            <video src="/apple-guide.mov" controls className="max-w-xs w-full border-4 border-black rounded-xl overflow-hidden" />
          </AccordionContent>
        </AccordionItem>

        {/* <AccordionItem value="item-2">
          <AccordionTrigger>Google Calendar</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </main>
  );
};

export default GuidePage;
