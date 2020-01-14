import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

const csvFileReader = new CsvFileReader('football.csv')

const reader = new MatchReader(csvFileReader);
reader.load()

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())

summary.buildAndPringReport(reader.matches)
