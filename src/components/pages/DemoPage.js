const proj1 = "Bent Creek Extension Study"
const projNum1 = "T35-180090"
const items = ["Bent Creek", "West Alabama", "Cahaba River Road", "Test 1", "Test 2", "Test 3", "Test 4"]
//import { DropDown } from "@/components/Menu_Button";  put this back if need be: <DropDown />
import Dropdown from "../Dropdown/Dropdown"
import DropdownItem from "../DropdownItem/DropdownItem"

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
                        <td class="text-left">
                            <div className="App">
                                <div className="content">
                                    <Dropdown buttonText="Select Project"
                                    content={<>
                                    {
                                        items.map(item => <DropdownItem 
                                        key={item}>{`${item}`}</
                                        DropdownItem>)
                                    }</>} />
                                </div>
                            </div>
                        </td>
                        <td class="text-center"></td>
                    </tr>
                </tbody>
            </table>
        
        </div>
    );
};