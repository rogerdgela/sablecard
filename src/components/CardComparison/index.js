import { Button, CardCompare, CheckIcon, ComparisonTable, LockedIcon, Price, TableData, TableHeader } from "./styles";

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
                        <TableData><CheckIcon>✔</CheckIcon></TableData>
                        <TableData><CheckIcon>✔</CheckIcon></TableData>
                    </tr>
                    <tr>
                        <TableData>Deposits FDIC insured up to $250,000</TableData>
                        <TableData><CheckIcon>✔</CheckIcon></TableData>
                        <TableData><CheckIcon>✔</CheckIcon></TableData>
                    </tr>
                    <tr>
                        <TableData>Rewards, cash back & card perks</TableData>
                        <TableData><CheckIcon>✔</CheckIcon></TableData>
                        <TableData><CheckIcon>✔</CheckIcon></TableData>
                    </tr>
                    <tr>
                        <TableData>Send checks & transfer money for free</TableData>
                        <TableData><CheckIcon>✔</CheckIcon></TableData>
                        <TableData><CheckIcon>✔</CheckIcon></TableData>
                    </tr>
                    <tr>
                        <TableData>Build credit history from Day 1</TableData>
                        <TableData><CheckIcon>✔</CheckIcon></TableData>
                        <TableData><LockedIcon>🔒</LockedIcon></TableData>
                    </tr>
                    <tr>
                        <TableData>No credit check required for sign up</TableData>
                        <TableData><CheckIcon>✔</CheckIcon></TableData>
                        <TableData><LockedIcon>🔒</LockedIcon></TableData>
                    </tr>
                    <tr>
                        <TableData>Cost per year</TableData>
                        <TableData><Price>$0</Price></TableData>
                        <TableData><Price>$0</Price></TableData>
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
