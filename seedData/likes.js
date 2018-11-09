let likeCoords = [
  53.7377611,-94.07365132,
53.41809911,-78.05732227,
43.28180405,-78.19672615,
30.8858495,-97.83480556,
54.40074598,-87.75802966,
46.38659874,-86.62573144,
39.06655754,-78.30904886,
46.71405149,-103.70261872,
47.9881734,-86.01471,
38.07527745,-75.64352458,
49.4774909,-83.55866048,
41.87249373,-89.91159774,
43.06853245,-106.75129951,
44.63250231,-97.65133782,
39.8355756,-105.92717196,
29.70790539,-93.36098231,
52.27122545,-74.14198686,
31.76631045,-94.42582385,
36.49392636,-74.73473593,
49.22137022,-81.95279398,
38.01215978,-82.27681674,
36.9942388,-95.80969827,
38.70028333,-100.77332702,
31.44715065,-89.42354458,
49.64012403,-84.02651737,
27.63010652,-88.17728008,
50.48446929,-71.33937915,
47.50192579,-76.09938177,
31.63571572,-97.81854708,
52.09595997,-88.42745305,
44.22664478,-94.61756459,
30.08545463,-87.97035093,
27.86414008,-88.89172379,
46.57216424,-76.40601116,
43.02861797,-98.48377577,
47.97368334,-81.89926197,
48.20246938,-96.37624842,
43.55681079,-105.49895068,
40.49678299,-103.94789847,
54.0518443,-84.1895717,
38.80053732,-104.92261741,
33.99260597,-94.7419459,
51.56807422,-86.9447491,
50.40139363,-74.61723691,
29.03097784,-87.74990613,
30.73330438,-89.54546728,
35.43622896,-88.87748672,
48.8627797,-89.76062786,
45.62825232,-104.39755559,
38.30886837,-76.28339842,
39.64612798,-92.76467224,
41.34934373,-79.73051578,
51.40729316,-91.44025427,
42.39024269,-75.9792772,
29.27029192,-86.87877066,
51.70107243,-95.42933099,
42.32200857,-79.45109218,
35.86430688,-98.90053367,
38.28730295,-83.72697558,
39.83414985,-102.18546383,
52.11542485,-91.81285751,
40.20197548,-92.07164051,
44.22724212,-95.03140186,
28.80201065,-83.39233339,
29.29840636,-88.90627566,
54.49585643,-88.53031908,
53.47760628,-80.26842064,
54.493368,-86.34551419,
49.97710306,-104.78028125,
34.72446939,-83.42835851,
48.06880643,-69.5624337,
42.12327289,-94.74819698,
38.34898389,-82.55232504,
38.3326942,-93.91722865,
52.87484154,-96.63361734,
28.99880825,-84.68500056,
31.93643369,-78.86527765,
32.68124576,-86.14922703,
55.34004888,-91.35708415,
50.62211435,-104.22544857,
49.70929317,-72.1973748,
50.06846774,-95.99871353,
42.75799271,-82.91938441,
31.73454876,-94.53140772,
40.28083942,-71.68928084,
40.90419035,-89.65678559,
47.32395415,-99.15388763,
51.3345695,-87.03439026,
31.01829268,-83.39110209,
44.14688507,-79.92654934,
42.65195197,-81.07935879,
31.51927455,-94.42441213,
49.73114439,-93.31458342,
40.27021216,-90.78160195,
53.12782341,-74.16911664,
37.47589432,-72.55478224,
42.24104945,-68.68985683,
45.78924206,-74.65472163,
35.43586805,-103.08831188,
44.35600065,-105.29712845,
49.02508575,-71.45592097,
38.08943541,-96.00750121,
43.93812726,-91.04010532,
37.89957738,-97.80611631,
49.13613295,-91.08655305,
28.56009366,-83.55521129,
54.67689574,-95.97300699,
46.93782188,-94.15439148,
33.45381597,-89.45565405,
43.38071006,-78.67408342,
30.61804274,-76.86544055,
45.37934903,-90.34666772,
31.95387931,-81.61859522,
55.14819047,-81.39807083,
43.71123304,-101.12128412,
34.92044758,-88.0879031,
42.13998318,-94.05406474,
46.36896058,-91.50533264,
36.26176707,-94.42895117,
42.26551839,-90.16166349,
37.37808233,-78.3565978,
33.30266475,-77.92909047,
53.79184127,-98.70167084,
37.87195682,-105.12352731]

// ,
// 40.27255232,-78.28463068,
// 41.25909517,-70.78074024,
// 44.6420798,-105.22650822,
// 40.80254747,-78.94406776,
// 35.37597643,-92.21495521,
// 38.90557874,-85.72494893,
// 40.48219832,-97.96546214,
// 48.15264769,-72.24311316,
// 31.44680084,-80.85971856,
// 44.49424156,-80.77957763,
// 40.88450692,-70.0735086,
// 43.82206408,-83.23745916,
// 42.68986258,-103.70180331,
// 36.89893007,-101.87171632,
// 34.86554891,-84.75993409,
// 30.82273583,-97.79256799,
// 44.28086121,-72.65215175,
// 30.46097661,-89.96829989,
// 42.36540923,-103.91440048,
// 44.71901182,-88.21328207,
// 49.70024723,-80.91716361,
// 44.37249415,-103.85429032,
// 32.8340229,-97.62017456,
// 44.29300762,-93.53804585,
// 42.37407606,-101.15370354,
// 37.95119321,-84.70478167,
// 45.96897527,-105.38994221,
// 49.68485539,-99.50861634,
// 48.67056617,-95.9099951,
// 35.16400485,-88.37585824,
// 46.78868077,-69.51350611,
// 39.07016392,-72.84331397,
// 47.39302275,-104.84071107,
// 33.9798269,-79.22395728,
// 45.25536667,-94.29080556,
// 38.22213053,-97.78250919,
// 36.66908324,-92.40191038,
// 49.12197083,-69.7812237,
// 35.3016587,-83.53924318,
// 44.61867103,-89.50831609,
// 53.40714553,-99.11945743,
// 49.1832072,-80.46346224,
// 35.41232651,-71.72594098,
// 55.1062591,-96.07964578,
// 51.3767669,-85.8131081,
// 34.95499583,-95.25890298,
// 43.85165059,-100.10704119,
// 49.96701312,-100.17356735,
// 47.49042054,-102.02157296,
// 46.1395132,-102.56599149,
// 44.16168347,-106.47254263,
// 44.71789265,-106.48454523,
// 37.74342243,-73.79993404,
// 47.84013097,-79.15006538,
// 42.59983906,-98.59471703,
// 41.4750471,-70.79422541,
// 47.44713141,-90.83584512,
// 35.64638696,-84.58838042,
// 44.53474338,-75.91744043,
// 37.49864828,-98.8946575,
// 38.80186446,-76.92551931,
// 30.45346538,-93.59202527,
// 45.76918426,-83.58823919,
// 39.79905443,-88.99979116,
// 51.73825633,-97.78338911,
// 49.11833703,-97.16507915,
// 49.40096323,-73.65846466,
// 48.48732696,-76.13736781,
// 33.4384908,-89.45926461,
// 36.07842191,-86.34273072,
// 33.47335269,-101.90985702,
// 41.84396457,-69.67752789,
// 37.8217913,-87.16130433,
// 44.63717155,-89.61795667,
// 52.5033437,-93.10289981,
// 36.71224189,-93.44353938,
// 34.86038418,-88.06990861,
// 45.31187086,-78.1674482,
// 32.81523976,-101.13671506,
// 45.66749549,-89.13905084,
// 37.82019023,-87.00516893,
// 36.57209469,-97.35815149,
// 31.1091901,-95.78025547,
// 46.08093117,-88.49549265,
// 37.9009273,-88.9481462,
// 30.017729,-79.94570492,
// 34.03287088,-77.68457525,
// 33.64939171,-89.27349147,
// 32.94883821,-81.30161158,
// 42.53080249,-74.29975082,
// 28.02949031,-84.85243543,
// 43.42275196,-75.40452919,
// 33.22893663,-83.09902303,
// 51.32789254,-83.48513829,
// 41.79228038,-105.84043023,
// 50.19819009,-71.52061689,
// 49.6554594,-73.89150097,
// 50.58216696,-81.69588083,
// 53.56297035,-87.73402481,
// 41.9698406,-88.44101134,
// 41.16069713,-86.4996107,
// 27.81370277,-91.37700578,
// 36.37043729,-96.47800529,
// 38.23480638,-90.50943759,
// 44.47717199,-80.42234338,
// 52.82020407,-82.80536776,
// 30.37247692,-85.51737333,
// 39.03763956,-86.0196278,
// 41.52342626,-85.95616599,
// 39.7403862,-88.27587799,
// 45.87339752,-85.59301876,
// 52.61639141,-78.07074486,
// 31.90664334,-85.59686699,
// 33.63395179,-94.8143642,
// 38.02480548,-86.19714529,
// 31.47025491,-83.50006646,
// 53.83272884,-99.67327054,
// 43.86700904,-90.70526023,
// 36.03001578,-92.47917083,
// 29.84832174,-94.34585538,
// 49.72821055,-90.52914009,
// 45.90695388,-103.53274826,
// 41.73094635,-74.72269381,
// 54.54521094,-91.07100428,
// 53.20097936,-100.35309027,
// 28.35946394,-92.23905889,
// 43.39180167,-69.7141532,
// 35.73533788,-98.34249522,
// 53.62488353,-76.49290166,
// 35.46406903,-88.11245879,
// 43.77364811,-70.77156315,
// 45.0056026,-75.24453006,
// 35.07858918,-93.95716652,
// 34.54324024,-77.35059428,
// 39.04203152,-96.60491657,
// 31.00194696,-83.12220682,
// 45.33959,-97.67457746,
// 46.58358059,-95.58124566,
// 43.64903508,-75.46712135,
// 29.66590153,-85.63354929,
// 33.30657925,-82.95365039,
// 34.03342631,-79.03250317,
// 43.79507236,-96.39156887,
// 40.20903164,-96.17093113,
// 47.47872167,-82.77908479,
// 34.84221964,-102.28507304,
// 35.63239389,-76.95018199,
// 34.56958255,-91.39015573,
// 43.5836228,-84.14788339,
// 30.33088547,-82.22969128,
// 39.51957033,-94.3142963,
// 43.03817477,-102.15469989,
// 34.22533803,-93.46541885,
// 39.16701553,-105.59057135,
// 44.79771262,-72.23596463,
// 49.69695918,-88.6521479,
// 49.08331326,-102.04027714,
// 37.78303892,-69.76894023,
// 39.25506136,-81.01906263,
// 41.07858658,-99.91734472,
// 35.09091371,-77.49797042,
// 34.84510153,-102.87006214,
// 33.14335742,-78.00204266,
// 47.36710856,-103.21152448,
// 32.67700529,-84.09947406,
// 41.23187569,-99.30766887,
// 37.85493214,-83.09463109,
// 39.01048625,-82.18655032,
// 37.83906174,-85.8613913,
// 45.21756335,-93.87519934,
// 51.47002729,-83.30321472,
// 53.79315611,-79.13208323,
// 30.70801142,-77.99420385,
// 38.85494508,-86.65808639,
// 38.05821327,-84.93811018,
// 37.7146731,-91.74133866,
// 46.68824235,-100.74338381,
// 52.0066708,-101.89261599,
// 31.66145659,-87.0323196,
// 46.31075716,-92.88662046,
// 47.76348137,-71.43516598,
// 41.22406551,-106.2760319,
// 38.69869144,-97.31608185,
// 53.85610291,-79.72994363,
// 37.93301069,-80.8508454,
// 34.7408382,-73.62434341,
// 37.0155824,-77.35728055,
// 41.51743578,-99.67889087,
// 36.29473659,-103.15107613,
// 34.12105285,-77.9694755,
// 50.36139163,-98.23334079,
// 33.35098694,-82.95658018,
// 52.78223173,-90.58367741,
// 36.9627641,-73.52391606,
// 41.26744239,-71.2021818,
// 30.99770918,-98.72482008,
// 40.09310314,-84.63425423,
// 47.63919315,-86.90365326,
// 42.97413176,-79.73119525,
// 34.23791297,-91.61352581,
// 48.61778116,-102.15376732,
// 33.05922483,-90.78260994,
// 43.5217136,-69.2010025,
// 44.14848295,-102.19299148,
// 35.78494943,-103.33637258,
// 52.95159825,-97.58373865,
// 33.5587899,-74.6424191,
// 33.49173965,-100.92393727,
// 44.2123945,-94.93799601,
// 52.84268955,-96.03094703,
// 29.10885435,-93.04780165,
// 50.90184644,-75.6873987,
// 36.65931239,-91.88876951,
// 29.239745,-95.41665493,
// 38.28843692,-72.09851732,
// 39.61891247,-80.91883588,
// 37.72626539,-102.28627067,
// 45.35102903,-101.42033466,
// 41.01868779,-89.01091148,
// 41.78180161,-68.27402819,
// 41.82668877,-75.60326784,
// 41.42445473,-106.38940574,
// 40.2039002,-103.38287809,
// 53.19369448,-98.87731333,
// 34.82649433,-79.64913916,
// 48.30616819,-93.51058812,
// 27.63088877,-89.86393868,
// 31.2847665,-98.80547265,
// 32.69297706,-79.78825922,
// 45.60578686,-101.18864684,
// 49.90472858,-93.74790351,
// 34.90452648,-82.04320038,
// 41.61327211,-86.52618913,
// 38.39625717,-84.27623636,
// 29.54674388,-85.89218972,
// 48.50246138,-95.20424623,
// 45.83732966,-98.77067912,
// 46.30834213,-88.18146055,
// 48.98685459,-88.88983908,
// 43.49406748,-84.933575,
// 50.80288807,-77.1532518,
// 33.89440692,-77.4600426,
// 46.13161289,-89.44187266,
// 48.73480884,-78.58779169,
// 45.47410478,-102.91780667,
// 53.84668654,-91.23674008,
// 42.01618885,-82.322217,
// 33.17006811,-92.15553184,
// 42.43014328,-77.7649224,
// 41.46786872,-101.20972892,
// 46.38886744,-78.86280614,
// 38.82533817,-89.94261377,
// 44.93393994,-100.1226957,
// 52.61712812,-77.10096638,
// 41.8589194,-78.78589263,
// 37.37378444,-104.10501846,
// 36.03138324,-81.30120649,
// 44.10997884,-72.01371301,
// 28.78251986,-90.50110477,
// 50.17831777,-95.97016082,
// 43.61798979,-81.34294633,
// 41.20239364,-83.67290811,
// 51.05206287,-98.62182153,
// 27.97148262,-87.57977153,
// 34.36011189,-76.00053187,
// 35.90559736,-75.14058646,
// 30.87338321,-92.3549679,
// 42.1804822,-85.41401575,
// 35.35914111,-76.0464346,
// 45.09539807,-84.64516421,
// 31.3728653,-91.3014976,
// 42.30262773,-99.67021693,
// 50.59452005,-92.29061578,
// 48.71281393,-76.56364218,
// 43.39229262,-105.94330411,
// 44.84987519,-104.37575556,
// 49.36248655,-95.17767387,
// 41.56552412,-90.7164895,
// 48.54538353,-105.80279769,
// 33.24992209,-86.92626213,
// 47.10605187,-82.18249365,
// 41.04502033,-106.90017577,
// 38.72885719,-90.34887301,
// 52.96574708,-95.15995752,
// 39.74471173,-71.20491425,
// 44.79817357,-73.8196586,
// 44.00263842,-106.99371261,
// 33.21328222,-96.62630816,
// 29.58070548,-81.01766995,
// 51.96568891,-99.96558929,
// 47.03113109,-72.64147756,
// 46.39183328,-74.33590494,
// 40.00369858,-85.4877227,
// 31.88012426,-96.55314682,
// 32.7735776,-89.81885278,
// 39.40319057,-103.71337722,
// 34.34319361,-101.88474088,
// 48.65742966,-70.36381265,
// 36.90324506,-100.29029222,
// 37.31241236,-79.63285063,
// 46.38848988,-90.66240204,
// 41.14133392,-82.99113136,
// 34.93685517,-98.55543706,
// 53.35036675,-81.34196839,
// 32.66613547,-91.74793319,
// 48.42857606,-87.89356172,
// 54.94214032,-89.77391067,
// 42.79412262,-95.66887352,
// 30.32601549,-77.64683047,
// 40.70800798,-95.8869671,
// 34.55397353,-98.17522282,
// 52.46637967,-83.42880298,
// 30.79327982,-92.15405276,
// 46.01524751,-82.99682565,
// 47.51997486,-87.69084572,
// 40.40055017,-86.17240395,
// 51.99153277,-94.20283684,
// 46.1314207,-93.48526496,
// 48.64567784,-79.96558869,
// 40.7874461,-93.01664199,
// 36.74602405,-100.7957296,
// 31.79255537,-81.86383774,
// 47.99326121,-97.00587085,
// 43.10145188,-98.05231925,
// 35.94966457,-96.15260488,
// 37.17087219,-83.89589108,
// 44.23853677,-101.68947696,
// 45.71598026,-83.57161164,
// 37.3664786,-75.80910649,
// 30.53666774,-86.97601229,
// 33.83401609,-83.03737503,
// 46.2962575,-95.79591041,
// 35.37444204,-102.02456911,
// 31.9393727,-77.21520193,
// 30.34105565,-90.91410669,
// 31.43238938,-91.03111606,
// 52.0289441,-101.53421624,
// 39.60247728,-86.35562739,
// 38.73361038,-69.23354215,
// 43.18544589,-86.37573178,
// 40.36136702,-89.55278993,
// 49.33509055,-78.50064739,
// 50.22653329,-90.9937862,
// 35.57944071,-78.68613465,
// 44.89403681,-81.4330889,
// 49.54264098,-82.34326115,
// 43.31197893,-93.91138493,
// 29.77293593,-80.88402427,
// 46.91573499,-87.34544959,
// 51.20570563,-88.49320319,
// 42.98072829,-70.66902819,
// 53.44440525,-77.86371542,
// 37.27989347,-70.38544637,
// 34.99663405,-74.09321797,
// 35.50734032,-72.75828274,
// 29.35369663,-86.37298856,
// 51.05008437,-103.04720214,
// 43.33720773,-73.20874903,
// 34.15924143,-83.72246052,
// 40.02771037,-76.57050031,
// 32.6540632,-81.33049536,
// 50.97162307,-82.23171631,
// 43.65706567,-80.5559553,
// 38.27885045,-81.09694098,
// 55.98668145,-90.05851919,
// 33.26301667,-93.01784349,
// 49.66592367,-91.28260589,
// 51.36489698,-81.06842652,
// 41.22017607,-94.48320684,
// 50.73016037,-96.75256243,
// 28.73643695,-85.28477239,
// 48.42474872,-73.52297196,
// 38.10855545,-85.48267932,
// 46.61938822,-88.98808848,
// 54.31801519,-83.4161766,
// 32.20020876,-84.80744188,
// 30.97174313,-92.46018783,
// 46.41286543,-94.08199038,
// 40.96578021,-82.7643924,
// 48.41025139,-95.22940808,
// 47.42701183,-98.30115831,
// 43.69024508,-72.92326269,
// 46.32495841,-97.544777,
// 34.30213921,-98.12838838,
// 41.23512903,-98.45996996,
// 38.48285911,-104.5102277,
// 39.8159059,-78.3505516,
// 41.65304795,-89.56289016,
// 47.16479484,-94.42934899,
// 32.69260122,-78.32432813,
// 40.21790242,-77.94836593,
// 47.84632182,-72.20882915,
// 45.15383823,-100.77278736,
// 29.28388789,-88.76304742,
// 49.33399375,-99.74728094,
// 32.99618391,-75.71780071,
// 49.58622769,-78.57676322,
// 41.64928708,-72.33914862,
// 40.65398842,-99.33525059,
// 40.02703139,-106.56082883,
// 50.90532484,-94.77019996,
// 52.35474533,-85.26125802,
// 47.74538899,-97.78808462,
// 46.12417656,-71.66567885,
// 42.59800733,-88.11739134,
// 54.29955798,-86.5937008,
// 32.08099994,-89.94676284,
// 53.50272287,-85.91868922,
// 47.32526255,-101.01236891,
// 51.09612231,-74.86469029,
// 52.68432977,-90.30445641,
// 41.29920493,-96.76558313,
// 31.67473753,-89.64326553,
// 42.61869356,-72.52337096,
// 39.98467498,-99.23163224,
// 41.39729423,-104.74709886,
// 35.46365013,-91.66498488,
// 37.98014238,-84.85539801,
// 44.69428241,-93.88920052,
// 43.36398041,-75.09130958,
// 49.0002579,-89.08764095,
// 30.73989243,-77.05868626,
// 29.77762177,-89.04661054,
// 40.56854414,-82.77388884,
// 40.37677326,-78.89228011,
// 45.2983545,-80.74776655,
// 41.61158076,-80.35576161,
// 54.26037039,-85.3435758,
// 42.91725439,-97.46007613,
// 38.95253507,-95.25105914,
// 41.93857451,-83.71672456,
// 42.2036814,-92.30261442,
// 43.94654887,-101.11775265,
// 31.01406254,-82.59573553,
// 53.47006914,-77.89668563,
// 41.07566386,-85.83740635,
// 36.85643581,-70.25456758,
// 39.10140507,-87.18742174,
// 41.56197287,-87.92537861,
// 51.27096291,-73.7166959,
// 55.47221933,-87.33381953,
// 44.89505302,-88.95640225,
// 52.19576489,-95.67598032,
// 31.24538588,-96.28066414,
// 33.62911336,-94.67731002,
// 36.37871195,-86.99398619,
// 32.39526213,-82.94684953,
// 29.19891477,-80.58170997,
// 32.27522269,-74.88923622,
// 47.50000105,-72.35158036,
// 38.5076738,-91.37775597,
// 30.37377053,-85.88070456,
// 38.90476615,-100.04195891,
// 47.89509258,-76.04451411,
// 39.82071772,-97.90940318,
// 35.63477674,-102.53409977,
// 39.97149041,-87.0980273,
// 41.08519502,-81.08819272,
// 44.62636454,-95.5555823,
// 32.23290156,-92.16596165,
// 40.0907528,-72.59439115,
// 42.25256456,-80.1699210,
// 38.20816377,-92.49101717,
// 39.55698666,-69.29257792,
// 48.6877107,-105.20089449,
// 31.36530204,-85.84980368,
// 45.09017965,-83.33299331,
// 52.88393285,-78.38432645,
// 40.89277089,-99.44924173,
// 35.57903306,-77.88213496,
// 48.74082932,-81.09861362,
// 37.47227522,-94.31603806,
// 49.96520225,-97.26430014,
// 38.38845745,-77.88092994,
// 41.54801124,-81.07654244,
// 53.72833478,-89.90912747,
// 53.99979421,-92.2834022,
// 48.12326847,-72.07724169,
// 35.61107233,-74.00552047,
// 41.25733785,-103.35751877,
// 28.81441818,-93.87657868,
// 45.10353554,-96.91202044,
// 37.46036724,-98.99050875,
// 40.27727343,-91.01849097,
// 51.04701158,-78.01686342,
// 31.67256509,-88.07925275,
// 47.68448793,-74.3439671,
// 37.00687817,-75.40087304,
// 35.51775317,-91.2493287,
// 28.88826387,-86.08164021,
// 33.36916681,-76.26482849,
// 45.59663703,-74.79589889,
// 48.43036824,-85.84559918,
// 36.78330097,-79.5505922,
// 37.06565874,-91.67644119,
// 29.61175582,-92.81209933,
// 41.89980663,-84.96596187,
// 40.93084157,-106.18204128,
// 29.08250345,-81.18564531,
// 42.79388463,-93.96784689,
// 38.70293777,-75.96401136,
// 37.06294402,-93.89819848,
// 49.11745986,-69.80691153,
// 52.19876963,-95.28297712,
// 40.08098543,-106.29475662,
// 32.02936754,-86.81876628,
// 38.22165893,-100.29341458,
// 34.19035567,-102.00128487,
// 38.36185465,-81.12556873,
// 38.36259979,-94.73884226,
// 53.87345784,-84.790007,
// 33.68692303,-81.80263638,
// 51.21630156,-78.21957586,
// 50.55514351,-76.52773753,
// 41.66605259,-86.23350681,
// 46.06128726,-71.27915212,
// 52.24322723,-92.14902451,
// 50.91054882,-97.00986622,
// 49.37684779,-102.57058762,
// 43.9050719,-97.73200354,
// 42.03101682,-81.84207724,
// 31.50359789,-95.77834588,
// 38.52973905,-81.32952052,
// 48.29860217,-70.24721625,
// 41.16011339,-94.53905336,
// 31.73736244,-88.49685402,
// 38.90943473,-89.2800742,
// 49.92883483,-89.2926372,
// 34.94130278,-90.20855554,
// 40.85579547,-90.72352738,
// 36.08286309,-78.48429594,
// 40.57501252,-68.60670331,
// 37.72754839,-72.65318819,
// 39.89139691,-94.29770797,
// 39.87163495,-70.07480421,
// 33.32986755,-92.67654454,
// 54.63230796,-91.05229277,
// 33.62194879,-85.44342095,
// 32.03995853,-77.4390797,
// 50.95360917,-88.82757079,
// 49.45757334,-99.15056016,
// 52.26548209,-100.42208219,
// 37.00812057,-102.94235346,
// 49.09858513,-78.77513473,
// 47.78046872,-70.32777517,
// 40.77455736,-72.105783,
// 33.26643155,-84.75331822,
// 46.53703156,-79.62053297,
// 49.36675043,-97.80674005,
// 47.10880667,-80.15235246,
// 28.75956965,-92.47213831,
// 37.3661394,-74.529365,
// 32.08401166,-79.2392011,
// 34.24649712,-72.46967238,
// 32.61746187,-91.78003615,
// 50.69168543,-80.8109028,
// 53.79515368,-77.47975977,
// 32.90483528,-100.99178244,
// 40.98265712,-70.06645799,
// 47.50323713,-94.96033718,
// 50.47901551,-76.8143834,
// 35.32780141,-88.82767773,
// 45.86088576,-98.32144585,
// 46.40156894,-83.40538121,
// 30.07204853,-97.00615927,
// 42.42426803,-69.23463182,
// 46.57222242,-85.0288078,
// 54.77891577,-85.9418588,
// 35.08805107,-79.11142627,
// 29.36703623,-94.12420293,
// 42.06377829,-88.48640158,
// 44.89988281,-103.5292754,
// 53.65699012,-99.60073534,
// 34.20632211,-72.76521115,
// 30.25974254,-84.66483424,
// 52.97405407,-98.57538933,
// 40.50474425,-88.62428781,
// 53.47518428,-90.84406504,
// 31.58901574,-99.94014688,
// 34.32141928,-76.81956316,
// 38.05985804,-90.32073683,
// 45.69501326,-70.64330481,
// 44.62636827,-97.80520085,
// 48.50905838,-105.59368886,
// 35.38471485,-95.66642644,
// 36.42350558,-92.47270641,
// 47.39076394,-78.89896312,
// 55.36849728,-88.34835022,
// 30.21192545,-96.32780176,
// 35.47476875,-82.74788403,
// 41.80707171,-84.48760288,
// 30.2320625,-84.52934751,
// 51.385423,-71.90306228,
// 32.66299826,-85.44855074,
// 32.51753845,-77.25757406,
// 41.53515775,-80.09374876,
// 41.8760091,-102.35682993,
// 43.67603404,-86.28496725,
// 40.10736349,-76.86338463,
// 39.70239384,-70.9135674,
// 33.87843752,-74.58116915,
// 42.44764604,-82.57003115,
// 31.88839908,-91.06854179,
// 43.43951589,-101.29546588,
// 38.84208777,-71.5219486,
// 43.13164283,-93.42240962,
// 41.1954031,-102.38201521,
// 45.22092427,-84.71520582,
// 34.66775148,-97.21822172,
// 41.72070556,-71.00996131,
// 48.22638654,-95.05482282,
// 35.63577277,-78.25744737,
// 53.77541437,-75.33535081,
// 48.55842673,-77.06183855,
// 28.3307157,-81.59505614,
// 37.33934135,-81.20285881,
// 41.14726024,-86.49445718,
// 38.46046726,-100.5178383,
// 35.46085058,-85.46809382,
// 30.90680358,-90.41429124,
// 36.10242712,-104.5215779,
// 29.35960558,-93.14922196,
// 44.79370892,-73.42065142,
// 45.686755,-88.75997833,
// 41.66926695,-78.08879099,
// 35.82033269,-100.80568628,
// 39.80479271,-71.71685192,
// 46.19069069,-73.75531343,
// 40.61342105,-91.92849981,
// 32.46059906,-77.31596911,
// 48.9533319,-100.34344569,
// 39.99157216,-92.15965636,
// 41.17311002,-96.92565925,
// 38.10486852,-78.74951865,
// 40.53132744,-95.93724157,
// 45.15834711,-97.80868309,
// 33.58374656,-87.01649421,
// 46.90655628,-69.2504424,
// 37.98228067,-78.78547241,
// 31.82578003,-93.12362913,
// 34.33023662,-101.78191004,
// 47.58460706,-95.59426014,
// 29.05781322,-82.38943299,
// 43.20696565,-98.98739418,
// 35.26838846,-71.21618242,
// 37.93140246,-86.17988674,
// 55.82745184,-90.33132508,
// 47.38428025,-99.4307181,
// 28.45691364,-86.86016816,
// 41.40684371,-88.10925281,
// 34.42904845,-97.98281995,
// 46.39634872,-103.27693962,
// 44.50349563,-80.99411166,
// 39.71241152,-72.3161418,
// 36.67893331,-86.61222341,
// 45.31165048,-81.67353832,
// 50.23663347,-92.4561181,
// 46.14560022,-71.87954593,
// 33.49181905,-80.09042201,
// 53.64173617,-89.01011184,
// 34.23338377,-75.84825111,
// 44.78042019,-92.93116323,
// 44.65580321,-87.04213117,
// 51.71066254,-82.41040691,
// 39.34565511,-75.86933647,
// 44.48136727,-74.12318122,
// 36.45232607,-95.4986833,
// 34.99006549,-98.46744528,
// 40.21521749,-86.8833537,
// 36.79553984,-93.72550066,
// 37.4713922,-100.86468463,
// 31.15486722,-97.31680788,
// 42.79408381,-70.74939516,
// 34.00507291,-79.2548431,
// 37.44751702,-91.95019514,
// 48.69105364,-101.59459625,
// 41.9972915,-84.2863057,
// 34.15741982,-88.69730465,
// 46.74151848,-70.86213875,
// 41.63635008,-78.80996388,
// 37.99354137,-77.49275552,
// 39.33419191,-81.87315361,
// 49.70438227,-96.34716161,
// 38.28679876,-101.5468942,
// 29.54613212,-92.64694521,
// 38.82927122,-90.28915118,
// 35.43373996,-73.17721235,
// 55.19119402,-81.03693942,
// 40.90437943,-89.7067297,
// 28.80284058,-81.28957735,
// 30.50801187,-89.72930305,
// 50.69122697,-100.03352714,
// 46.15139904,-79.17001406,
// 44.24801968,-78.40744279,
// 42.94890482,-88.76509444,
// 46.50381385,-103.94874461,
// 46.7411775,-101.32178131,
// 33.6961628,-102.43536133,
// 50.54062813,-100.22964164,
// 38.4541156,-92.35552782,
// 43.31431322,-99.25789331,
// 38.67875127,-76.65677661,
// 38.45654965,-105.30997857,
// 32.10193709,-99.59969484,
// 47.71804998,-92.30912026,
// 40.97771579,-96.82890485,
// 41.35352152,-72.79903571,
// 43.87840634,-105.29877744,
// 34.73995049,-87.80946324,
// 28.74507395,-93.19419176,
// 34.84385231,-84.19078586,
// 30.37421925,-94.7822928,
// 40.27331916,-94.28148258,
// 35.6542506,-96.85841227,
// 42.01974512,-91.99337507,
// 38.0896909,-83.67889672,
// 43.268068,-81.44297604,
// 40.16355388,-82.06808766,
// 32.0787899,-82.89998478,
// 30.83632175,-91.29849746,
// 36.87673639,-87.71267742,
// 49.16849873,-91.12006864,
// 49.73530286,-83.86577786,
// 55.20875386,-87.22880242,
// 43.49376167,-101.33073232,
// 46.8587545,-99.92058909,
// 28.88733405,-91.56737334,
// 36.7953419,-83.33414096,
// 41.52424116,-70.06058301,
// 37.76281233,-79.06974671,
// 52.48824382,-87.29073153,
// 32.45281695,-77.34267465,
// 36.81934283,-82.43971185,
// 41.94447873,-99.24908395,
// 41.85281252,-94.99647246,
// 39.00897724,-87.39934336,
// 37.01861415,-85.65761915,
// 43.96422673,-71.8841399,
// 50.7932935,-89.53538555,
// 45.83312339,-82.33758276,
// 36.06746311,-82.71157149,
// 36.96300785,-93.68914847,
// 35.75487815,-85.34197242,
// 37.86163596,-80.51682146,
// 40.89818529,-84.497078,
// 36.35470574,-104.40821424,
// 41.63723134,-81.96859154,
// 40.30545458,-79.30464437,
// 41.17163281,-69.04649018,
// 41.84825603,-75.06735186,
// 32.34822432,-94.18691312,
// 45.15176864,-93.50344602,
// 42.56470017,-98.7911509,
// 50.91617245,-92.07443303,
// 52.92755904,-100.68019379,
// 39.1403338,-96.10271007,
// 35.88636,-83.03354398,
// 32.28433627,-76.41160269,
// 51.43314942,-80.95044465,
// 30.23705452,-86.93026953,
// 38.80446701,-82.33935553,
// 36.17531023,-91.98493259,
// 43.07864734,-105.64498901,
// 47.08978767,-100.0196946,
// 35.56713712,-71.15480947,
// 40.40162812,-79.78626512,
// 33.98838821,-77.57282945,
// 41.50987424,-74.89799931,
// 49.28853056,-81.74621386,
// 55.06849593,-86.89120139,
// 37.52197536,-69.76773083,
// 53.98135243,-90.32805534,
// 34.75254085,-91.37188612,
// 53.82877464,-80.55906108,
// 39.97473216,-85.28383931,
// 42.01764256,-78.43143427,
// 53.79140239,-80.71364675,
// 31.62238345,-84.05007952,
// 46.45612708,-78.17977932,
// 34.1290829,-98.91610448,
// 37.91517125,-97.79298232,
// 27.50591544,-86.25251462,
// 45.98957567,-102.57864463,
// 47.93832779,-72.63270455,
// 48.44411272,-83.87106134,
// 47.80182027,-84.26010825,
// 51.11493451,-96.72814999,
// 51.95943662,-90.31776141,
// 48.35029543,-91.61765493,
// 44.76033004,-93.30343923,
// 42.54280496,-95.25868314,
// 49.08667807,-79.73501209,
// 37.98045189,-96.212671,
// 42.434724,-77.43334711,
// 51.92298858,-87.78326021,
// 39.13838193,-97.85307868,
// 31.63516836,-86.44213546,
// 37.68164026,-75.58190284,
// 29.49960298,-93.26451738,
// 45.92353103,-96.85661871,
// 46.07309679,-97.11454212,
// 51.457858,-88.43869056,
// 43.69743032,-87.25854104,
// 52.93351773,-79.21542033,
// 27.91805038,-90.18491622,
// 48.0288884,-95.98198765,
// 44.78137512,-74.02472153,
// 50.6314202,-84.36487339,
// 34.74888335,-80.23589633,
// 52.75408264,-82.87569406,
// 48.27332259,-101.19823144,
// 39.6211857,-72.58898815,
// 33.65933275,-83.21989715,
// 50.08912839,-74.80020201,
// 39.93587307,-76.65945711,
// 43.44123944,-88.21819461,
// 53.15651517,-98.55629948,
// 41.49147288,-93.04462149,
// 47.52845298,-70.54805759,
// 37.27724725,-71.26446025,
// 41.32929358,-77.85036639,
// 40.80478492,-100.64150268,
// 36.80456195,-81.86118139,
// 48.35448315,-100.00495836,
// 28.69530429,-81.6245137,
// 39.74036709,-82.75644063,
// 34.56141206,-100.67325739,
// 42.85244571,-100.03035279,
// 34.15763115,-85.16274536,
// 37.16541422,-73.11437464,
// 46.55209092,-87.69215044,
// 45.61937633,-83.22038795,
// 49.1090667,-78.44592841,
// 41.07393417,-79.47105569,
// 33.24397675,-100.89993834,
// 53.20516548,-85.8557848,
// 39.26246475,-100.3797195,
// 52.69149482,-95.57809607,
// 51.34821015,-74.76055652,
// 43.22374779,-77.91889507,
// 47.93402825,-81.81413419,
// 43.68151612,-82.30736714,
// 36.13363436,-87.5024953,
// 31.46575491,-92.89003164,
// 42.32955856,-74.06605197,
// 42.07291101,-86.24795417,
// 31.95320514,-84.9432198,
// 48.74550237,-100.01746049,
// 52.28051741,-91.08189809,
// 40.23104079,-94.05184368,
// 47.80927872,-78.79749445,
// 41.03265146,-97.14918005,
// 39.13341046,-100.81542841,
// 35.17425447,-83.23101269,
// 40.67029832,-95.83246553,
// 49.48699235,-89.68860865,
// 34.02409998,-80.31861114,
// 35.84053928,-95.24518868,
// 33.75799857,-89.62937387,
// 29.19798146,-93.59115523,
// 36.43517993,-80.41148124,
// 47.88257459,-81.37485704,
// 41.7663326,-71.828396,
// 46.6365018,-97.66797358,
// 46.10805395,-94.1572581,
// 36.19471172,-86.8917387,
// 54.68572841,-86.95885745,
// 46.8854119,-94.51971056,
// 43.8423622,-103.56619655,
// 36.92222209,-91.09586348,
// 44.20501901,-68.43550375,
// 45.7982433,-82.60524509,
// 35.83446746,-101.99757873,
// 47.98036143,-97.26886439,
// 54.67111623,-82.83528663,
// 36.2439207,-104.64014064
// ]



// let likeLat = []
// let likeLong = []


let likeLatLong = []

for (let i = 0; i < likeCoords.length; i = i + 2){
  let arr = []
  arr.push(likeCoords[i])
  arr.push(likeCoords[i + 1])
  // if (i % 2 === 0){
  //   obj.lat = likeCoords[i]
  //   likeLat.push(likeCoords[i])
  // } else {
  //   obj.long = likeCoords[i]
  //   likeLong.push(likeCoords[i])
  // }
  likeLatLong.push(arr)
}
module.exports = {
  // likeLat,
  // likeLong
  likeLatLong
}

