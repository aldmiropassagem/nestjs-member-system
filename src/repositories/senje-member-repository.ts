export abstract class SenjeMemberRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
