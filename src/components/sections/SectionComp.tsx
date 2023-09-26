import React from 'react'
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@carbon/react'
import { useData } from '../hooks/useData'

export const SectionComp = () => {

    const { allUsersCollected } = useData()
    return (
        <div style={{ margin: 20 }}>
            <Table aria-label="sample table">
                <TableHead>
                    <TableRow>
                        <TableHeader>
                            Name
                        </TableHeader>
                        <TableHeader>
                            Last Name
                        </TableHeader>
                        <TableHeader>
                            City
                        </TableHeader>
                        <TableHeader>
                            Email
                        </TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allUsersCollected.map(
                        (user) =>
                        (
                            <TableRow>
                                <TableCell>
                                    {user.name}
                                </TableCell>
                                <TableCell>
                                    {user.lastName}
                                </TableCell>
                                <TableCell>
                                    {user.city}
                                </TableCell>
                                <TableCell>
                                    {user.email}
                                </TableCell>
                            </TableRow>
                        )
                    )
                    }
                </TableBody>
            </Table>
        </div>
    )
}
