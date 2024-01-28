import EventEmitter from 'node:events';
import { FileReader } from './file-reader.interface.js';
import { readFileSync } from "node:fs";

export class TSVFileReader extends EventEmitter implements FileReader {
  constructor(private readonly filename: string) {
    super();
  }

  public read(): void {
    // TODO:
  }
}
