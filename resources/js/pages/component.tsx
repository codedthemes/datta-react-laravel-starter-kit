import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Link, Head } from '@inertiajs/react';

import { Alert,AlertDescription, AlertDismissible } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Component',
        href: '/component',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Component" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-6">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12">
                        <Card>
                            <CardHeader>
                                <CardTitle>Basic Alerts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Alert variant="primary"><AlertDescription>A simple primary alert—check it out!</AlertDescription></Alert>
                                <Alert variant="secondary"><AlertDescription>A simple secondary alert—check it out!</AlertDescription></Alert>
                                <Alert variant="success"><AlertDescription>A simple success alert—check it out!</AlertDescription></Alert>
                                <Alert variant="danger"><AlertDescription>A simple danger alert—check it out!</AlertDescription></Alert>
                                <Alert variant="warning"><AlertDescription>A simple warning alert—check it out!</AlertDescription></Alert>
                                <Alert variant="info"><AlertDescription>A simple info alert—check it out!</AlertDescription></Alert>
                                <Alert variant="dark"><AlertDescription>A simple dark alert—check it out!</AlertDescription></Alert>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Link Alerts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Alert variant="primary"><AlertDescription>A simple primary with <Link href="#">an example link</Link> . Give it a click if you like.</AlertDescription></Alert>
                                <Alert variant="secondary"><AlertDescription>A simple secondary with <Link href="#">an example link</Link> . Give it a click if you like.</AlertDescription></Alert>
                                <Alert variant="success"><AlertDescription>A simple success with <Link href="#">an example link</Link> . Give it a click if you like.</AlertDescription></Alert>
                                <Alert variant="danger"><AlertDescription>A simple danger with <Link href="#">an example link</Link> . Give it a click if you like.</AlertDescription></Alert>
                                <Alert variant="warning"><AlertDescription>A simple warning with <Link href="#">an example link</Link> . Give it a click if you like.</AlertDescription></Alert>
                                <Alert variant="info"><AlertDescription>A simple info with <Link href="#">an example link</Link> . Give it a click if you like.</AlertDescription></Alert>
                                <Alert variant="dark"><AlertDescription>A simple dark with <Link href="#">an example link</Link> . Give it a click if you like.</AlertDescription></Alert>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Dismissing</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Alert variant="primary"><AlertDescription>Holy guacamole! You should check in on some of those fields below. <AlertDismissible/></AlertDescription></Alert>
                                <Alert variant="secondary"><AlertDescription>Holy guacamole! You should check in on some of those fields below. <AlertDismissible/></AlertDescription></Alert>
                                <Alert variant="success"><AlertDescription>Holy guacamole! You should check in on some of those fields below. <AlertDismissible/></AlertDescription></Alert>
                                <Alert variant="danger"><AlertDescription>Holy guacamole! You should check in on some of those fields below. <AlertDismissible/></AlertDescription></Alert>
                                <Alert variant="warning"><AlertDescription>Holy guacamole! You should check in on some of those fields below. <AlertDismissible/></AlertDescription></Alert>
                                <Alert variant="info"><AlertDescription>Holy guacamole! You should check in on some of those fields below. <AlertDismissible/></AlertDescription></Alert>
                                <Alert variant="dark"><AlertDescription>Holy guacamole! You should check in on some of those fields below. <AlertDismissible/></AlertDescription></Alert>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Default Button</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Button variant="primary">Primary</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="success">Success</Button>
                                    <Button variant="danger">Danger</Button>
                                    <Button variant="warning">Warning</Button>
                                    <Button variant="info">Info</Button>
                                    <Button variant="light">Light</Button>
                                    <Button variant="dark">Dark</Button>
                                    <Button variant="link">Link</Button>
                                </div>
                                <div className="grid gap-2 mt-2">
                                    <Button variant="primary">Block Level Button</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Light Button</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Button variant="light_primary">Primary</Button>
                                    <Button variant="light_secondary">Secondary</Button>
                                    <Button variant="light_success">Success</Button>
                                    <Button variant="light_danger">Danger</Button>
                                    <Button variant="light_warning">Warning</Button>
                                    <Button variant="light_info">Info</Button>
                                    <Button variant="light_dark">Dark</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-12">
                        <Card>
                            <CardHeader>
                                <CardTitle>Link</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Button variant="light_primary">Primary</Button>
                                    <Button variant="light_secondary">Secondary</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-12">
                        <Card>
                            <CardHeader>
                                <CardTitle>Collapsible</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Collapsible>
                                    <CollapsibleTrigger>
                                        Collapsible
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</CollapsibleContent>
                                </Collapsible>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
