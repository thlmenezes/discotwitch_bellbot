export interface Command<Message> {
  name: string;
  args: string[];
  help: string;
  usage: string;
  description: string;
  execute: (message: Message, args: Map<string, string>)=> void;
}