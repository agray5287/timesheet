const proj1 = "Bent Creek Extension Study"
const projNum1 = "T35-180090"
import { DropDown } from "@/components/Menu_Button";

export function DemoPage() {
    return(
        <div class=" px-10 py-10 text-black">
            <table class="table-auto border-collapse border border-black hover:shadow-lg">
            <thead>
            <tr class="border">
                <th class="border border-black px-1">Project Name</th>
                <th class="border border-black px-1 py-1">Project Number</th>
                <th class="border border-black px-1 py-1">Monday</th>
                <th class="border border-black px-1 py-1">Tuesday</th>
                <th class="border border-black px-1 py-1">Wednesday</th>
                <th class="border border-black px-1 py-1">Thursday</th>
                <th class="border border-black px-1 py-1">Friday</th>
                <th class="border border-black px-1 py-1">Total</th>
                </tr>
                </thead>
                <tbody>
            <tr>
                <td class="text-left"><DropDown /></td>
                <td class="text-center">{projNum1}</td>
            </tr>
            </tbody>
            </table>
            
        </div>
    );
};