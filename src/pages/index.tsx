import { useState } from "react";
import {
  Star,
  StarOff,
  ChevronDown,
  Plus,
  Minus,
  Search,
  Check,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";

type Rarity = "Common" | "Secret" | "Robby";

type SonnyAngel = {
  id: string;
  name: string;
  series: string;
  releaseDate: string;
  image: string;
  owned: boolean;
  wishlist: boolean;
  rarity: Rarity;
};

export default function Home() {
  const [sonnyAngels, setSonnyAngels] = useState<SonnyAngel[]>([
    {
      id: "1",
      name: "Rabbit",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "2",
      name: "Elephant",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "3",
      name: "Panda",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "4",
      name: "Sloth",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "5",
      name: "Owl",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "6",
      name: "Tiger",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "7",
      name: "White Bear",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "8",
      name: "Cockerel",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "9",
      name: "Dalmatian",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "10",
      name: "Monkey",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "11",
      name: "Frog",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "12",
      name: "Koala",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "13",
      name: "Chipmunk",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Secret",
    },
    {
      id: "14",
      name: "Robby Angel",
      series: "Animal Series 1",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Robby",
    },
    {
      id: "15",
      name: "Mouse",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "16",
      name: "Lesser Panda",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "17",
      name: "Chameleon",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "18",
      name: "Uribou",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "19",
      name: "Skunk",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "20",
      name: "Sheep",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "21",
      name: "Hedgehog",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "22",
      name: "Fawn",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "23",
      name: "Duck",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "24",
      name: "Cow",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "25",
      name: "Reindeer",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "26",
      name: "Pig",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "27",
      name: "Kappa Baby",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Secret",
    },
    {
      id: "28",
      name: "Robby Angel",
      series: "Animal Series 2",
      releaseDate: "2018",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Robby",
    },
    {
      id: "29",
      name: "Shark",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "30",
      name: "Jellyfish",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "31",
      name: "Clownfish",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "32",
      name: "Shell",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "33",
      name: "Penguin",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "34",
      name: "Manta",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "35",
      name: "Dolphin",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "36",
      name: "Seal",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "37",
      name: "Seahorse",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "38",
      name: "Whale",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "39",
      name: "Blowfish",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "40",
      name: "Starfish",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Common",
    },
    {
      id: "41",
      name: "Turtle",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Secret",
    },
    {
      id: "42",
      name: "Robby Angel",
      series: "Marine Series",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
      owned: false,
      wishlist: false,
      rarity: "Robby",
    },
  ]);

  const [sortBy, setSortBy] = useState<"series" | "releaseDate">("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const toggleOwned = (id: string) => {
    setSonnyAngels((angels) =>
      angels.map((angel) =>
        angel.id === id
          ? { ...angel, owned: !angel.owned, wishlist: false }
          : angel
      )
    );
  };

  const toggleWishlist = (id: string) => {
    setSonnyAngels((angels) =>
      angels.map((angel) =>
        angel.id === id
          ? { ...angel, wishlist: !angel.wishlist, owned: false }
          : angel
      )
    );
  };

  const getFilteredAngels = (view: "all" | "collection" | "wishlist") => {
    let filtered = sonnyAngels;
    if (view === "collection") {
      filtered = sonnyAngels.filter((angel) => angel.owned);
    } else if (view === "wishlist") {
      filtered = sonnyAngels.filter((angel) => angel.wishlist);
    }

    filtered = filtered.filter(
      (angel) =>
        angel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        angel.series.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      if (sortBy === "series") {
        return a.series.localeCompare(b.series);
      } else {
        return a.releaseDate.localeCompare(b.releaseDate);
      }
    });
  };

  const collectedCount = sonnyAngels.filter((angel) => angel.owned).length;
  const totalCount = sonnyAngels.length;
  const progress = (collectedCount / totalCount) * 100;

  const getRarityColor = (rarity: Rarity) => {
    switch (rarity) {
      case "Common":
        return "bg-geraldine-200 text-geraldine-800";
      case "Secret":
        return "bg-yellow-200 text-yellow-800";
      case "Robby":
        return "bg-purple-200 text-purple-800";
    }
  };

  return (
    <TooltipProvider>
      <div className="mx-auto min-h-screen max-w-7xl p-4">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="block">
            <Logo />
            <span className="sr-only">Sonny Angel Watch</span>
          </h1>
          <Avatar className="h-10 w-10 md:h-12 md:w-12">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-geraldine-100 font-bold text-geraldine-600">
              SA
            </AvatarFallback>
          </Avatar>
        </header>

        <div className="mx-auto mb-6 max-w-xl">
          <Progress value={progress} className="h-2 bg-geraldine-100 md:h-3" />
          <p className="mt-1 text-center text-xs text-gray-600 md:text-sm">
            {collectedCount} of {totalCount} Sonny Angels collected
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-grow md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
            <Input
              type="text"
              placeholder="Search Sonny Angels..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-full border-geraldine-300 bg-white pl-10 focus:border-geraldine-500 focus:ring-geraldine-500"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="rounded-full border-geraldine-300 bg-white text-geraldine-600 hover:bg-geraldine-100"
              >
                Sort by <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => setSortBy("series")}>
                Series
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setSortBy("releaseDate")}>
                Release Date
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Tabs
          defaultValue="all"
          className="mb-6"
          onValueChange={(value) =>
            setActiveTab(value as "all" | "collection" | "wishlist")
          }
        >
          <TabsList className="mx-auto mb-4 grid w-full max-w-md grid-cols-3 rounded-full bg-geraldine-100 p-1">
            <TabsTrigger value="all" className="rounded-full">
              All
            </TabsTrigger>
            <TabsTrigger value="collection" className="rounded-full">
              Collection
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="rounded-full">
              Wishlist
            </TabsTrigger>
          </TabsList>
          {["all", "collection", "wishlist"].map((view) => (
            <TabsContent key={view} value={view}>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {getFilteredAngels(
                  view as "all" | "collection" | "wishlist"
                ).map((angel) => (
                  <div
                    key={angel.id}
                    className="rounded-lg bg-white p-4 shadow-md"
                  >
                    <div className="relative">
                      <img
                        src={angel.image}
                        alt={angel.name}
                        className="mb-2 h-32 w-full rounded-md object-cover"
                      />
                      <Badge
                        className={`absolute right-2 top-2 ${getRarityColor(
                          angel.rarity
                        )} rounded-full px-2 py-0.5 text-xs`}
                      >
                        {angel.rarity}
                      </Badge>
                    </div>
                    <h3 className="flex items-center truncate font-semibold text-geraldine-600">
                      {angel.name}
                      {angel.owned && (
                        <Check className="ml-1 h-5 w-5 text-geraldine-300" />
                      )}
                    </h3>
                    <p className="truncate text-xs text-gray-500">
                      {angel.series}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="secondary"
                            size="icon"
                            className={`rounded-full bg-geraldine-100 text-geraldine-600 hover:bg-geraldine-200 ${
                              angel.owned
                                ? "bg-geraldine-400 text-white hover:bg-geraldine-500"
                                : ""
                            }`}
                            onClick={() => toggleOwned(angel.id)}
                          >
                            {angel.owned ? (
                              <Minus className="h-4 w-4" />
                            ) : (
                              <Plus className="h-4 w-4" />
                            )}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-geraldine-200">
                          <p className="text-geraldine-950">
                            {angel.owned ? "Remove from" : "Add to"} collection
                          </p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="secondary"
                            size="icon"
                            className={`rounded-full bg-geraldine-100 text-geraldine-600 hover:bg-geraldine-200 ${
                              angel.wishlist
                                ? "bg-geraldine-400 text-white hover:bg-geraldine-500"
                                : ""
                            }`}
                            onClick={() => toggleWishlist(angel.id)}
                          >
                            {angel.wishlist ? (
                              <StarOff className="h-4 w-4" />
                            ) : (
                              <Star className="h-4 w-4" />
                            )}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            {angel.wishlist ? "Remove from" : "Add to"} wishlist
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </TooltipProvider>
  );
}
