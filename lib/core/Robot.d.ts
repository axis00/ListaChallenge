declare class Robot {
    id: string;
    name: string;
    purpose: string;
    private constructor();
    static create(id: string | undefined, name: string, purpose: string): Robot;
}
export default Robot;
