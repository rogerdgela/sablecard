import { Button, CardCompare, ComparisonTable, Price, TableData, TableHeader, Year } from "./styles";
import { Check, Lock } from 'lucide-react';

export default function Component() {
    return (
        <>
            <ComparisonTable>
                <thead>
                    <tr>
                        <TableHeader></TableHeader>
                        <TableHeader>
                            <CardCompare>
                                <img src="/images/cardduo.png" width={266} alt="card duo" />
                                <p>Sable Secured Credit & Debit Card</p>
                            </CardCompare>
                        </TableHeader>
                        <TableHeader>
                            <CardCompare>
                                <img src="/images/cardone.png" width={196} alt="card duo" />
                                <p style={{ width: 150 + 'px' }}>Sable Debit Card</p>
                            </CardCompare>
                        </TableHeader>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TableData>No monthly fees or minimum balance</TableData>
                        <TableData><Check /></TableData>
                        <TableData><Check /></TableData>
                    </tr>
                    <tr>
                        <TableData>Deposits FDIC insured up to $250,000</TableData>
                        <TableData><Check /></TableData>
                        <TableData><Check /></TableData>
                    </tr>
                    <tr>
                        <TableData>Rewards, cash back & card perks</TableData>
                        <TableData><Check /></TableData>
                        <TableData><Check /></TableData>
                    </tr>
                    <tr>
                        <TableData>Send checks & transfer money for free</TableData>
                        <TableData><Check /></TableData>
                        <TableData><Check /></TableData>
                    </tr>
                    <tr>
                        <TableData>Build credit history from Day 1</TableData>
                        <TableData><Check /></TableData>
                        <TableData><Lock /></TableData>
                    </tr>
                    <tr>
                        <TableData>No credit check required for sign up</TableData>
                        <TableData><Check /></TableData>
                        <TableData><Lock /></TableData>
                    </tr>
                    <tr>
                        <TableData style={{ verticalAlign: "top" }}>Cost per year</TableData>
                        <TableData style={{ verticalAlign: "top" }}><Price>$0</Price><Year>/year</Year></TableData>
                        <TableData style={{ verticalAlign: "top" }}><Price>$0</Price><Year>/year</Year></TableData>
                    </tr>
                    <tr>
                        <TableData></TableData>
                        <TableData><Button>Get Credit & Debit</Button></TableData>
                        <TableData><Button>Get Debit</Button></TableData>
                    </tr>
                </tbody>
            </ComparisonTable>
        </>
    );
};
