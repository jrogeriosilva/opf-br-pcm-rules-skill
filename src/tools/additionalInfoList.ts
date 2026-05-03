// Load additionalInfo and show only the `Iniciação de Pagamentos Sem Redirecionamento Page` addinfo Property names
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const additionalInfoPath = path.resolve(currentDir, '../../output/additional-info.json');

interface AdditionalInfoEntry {
  pageId: string;
  title: string;
  url: string;
  fields: { campo?: string; name?: string }[];
}

interface AdditionalInfoFile {
  pages: AdditionalInfoEntry[];
}

function loadAdditionalInfo(): AdditionalInfoEntry[] {
  const data = fs.readFileSync(additionalInfoPath, 'utf-8');
  const parsed = JSON.parse(data) as AdditionalInfoEntry[] | AdditionalInfoFile;

  if (Array.isArray(parsed)) {
    return parsed;
  }

  return parsed.pages;
}

function listFieldNamesForPage(pageTitle: string): void {
  const additionalInfo = loadAdditionalInfo();
  const entry = additionalInfo.find(info => info.title.includes(pageTitle));

  if (!entry) {
    console.log(`No entry found for page title containing "${pageTitle}"`);
    return;
  }

  console.log(`Fields for page "${entry.title}":`);
  entry.fields.forEach(field => {
    console.log(`- ${field.campo ?? field.name}`);
  });
}

// Example usage:
listFieldNamesForPage('Iniciação de Pagamentos Sem Redirecionamento');
listFieldNamesForPage('Iniciação de Pagamentos');
listFieldNamesForPage('Pagamentos Automáticos');