window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10640","name":"EQ_QWorkPlanItems","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE View EQ_QWorkPlanItems\r\nAs\r\n--作业计划明细表 表头\r\nselect \r\nN'' As SelCol,W.cPlanCode,W.cWorkConCode,WC.cWorkConName,W.cWorkTypeCode,WT.cWorkTypeName,W.intObjType,\r\n(Case W.intObjType When 1 then N'位置' When 2 then N'设备                  ' End) As intObjTypeName,\r\nW.cObj,(Case W.intObjType When 1 then PN.cPName When 2 then E.cEQName End) As cObjName,\r\n(Case W.intObjType When 1 then W.cObj When 2 then N'' End) As cObj_P,\r\n(Case W.intObjType When 1 then N'' When 2 then W.cObj End) As cObj_E,\r\n(Case W.intObjType When 1 then N'' When 2 then ET.cEQTypeCode End) As cEQTypeCode,\r\n(Case W.intObjType When 1 then N'' When 2 then ET.cEQTypeName End) As cEQTypeName,\r\n(Case W.intObjType When 1 then N'' When 2 then ET.cLBCode End) As cLBCode,\r\n(Case W.intObjType When 1 then N'' When 2 then L.cLBName End) As cLBName,\r\nW.dtPlanStart,W.dtPlanEnd,W.cWorkDep,DP.cDepName As cWorkDepName,\r\n(Case W.intObjType When 1 then N'' When 2 then E.cDepCode End) As cUseDep,\r\n(Case W.intObjType When 1 then N'' When 2 then DP2.cDepName End) As cUseDepName,\r\nW.cPlaner,P.cPersonName As cPlanerName,\r\nW.intFlag,(Case W.intFlag When 1 Then N'系统自动生成                  ' When 2 Then N'手工录入' When 3 Then N'故障生成' End) As intFlagName,\r\nW.intPlan,(Case W.intPlan When 1 Then N'计划          ' When 2 Then N'审核' When 3 Then N'下达' When 4 Then N'执行' When 5 Then N'完成' End) As intPlanName,\r\nW.cMaker,W.dtDate,W.cChecker,W.dtAudit,W.cWorkCode,\r\nW.cNext,W.dtNext,W.cBatch,W.cMemo,\r\n(Case W.intObjType When 1 Then N'' When 2 Then isnull(E.cgg,N'') End) As cgg,\r\n(Case W.intObjType When 1 Then N'' When 2 Then isnull(E.cxh,N'') End) As cxh,\r\nW.cDefine1,W.cDefine2,W.cDefine3,W.cDefine4,W.cDefine5,W.cDefine6,W.cDefine7,W.cDefine8,\r\nW.cDefine9,W.cDefine10,W.cDefine11,W.cDefine12,W.cDefine13,W.cDefine14,W.cDefine15,W.cDefine16,W.intPlan as intplanstate,W.cSysBarCode  \r\nfrom EQ_WorkPlan W\r\nLeft Join EQ_WorkContent WC On WC.cWorkConCode=W.cWorkConCode\r\nLeft Join EQ_Position PN On W.cObj=PN.cPCode\r\nLeft Join EQ_EQData E On W.cObj=E.cEQCode\r\nleft Join EQ_EQType ET On E.cEQTypeCode=ET.cEQTypeCode\r\nLeft Join EQ_LB L On L.cLBCode=ET.cLBCode\r\nLeft Join Department DP On DP.cDepCode=W.cWorkDep\r\nLeft Join Department DP2 On DP2.cDepCode=E.cDepCode\r\nLeft Join Person P On P.cPersonCode=W.cPlaner\r\nLeft Join EQ_WorkType WT On W.cWorkTypeCode=WT.cWorkTypeCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EQ_QWorkPlanItems"},{"field":"Type","value":"View"}],"columns":[{"id":"column-198981","object_id":"column-198981","name":"SelCol","name_without_path":"SelCol","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198982","object_id":"column-198982","name":"cPlanCode","name_without_path":"cPlanCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198983","object_id":"column-198983","name":"cWorkConCode","name_without_path":"cWorkConCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198984","object_id":"column-198984","name":"cWorkConName","name_without_path":"cWorkConName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198985","object_id":"column-198985","name":"cWorkTypeCode","name_without_path":"cWorkTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198986","object_id":"column-198986","name":"cWorkTypeName","name_without_path":"cWorkTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198987","object_id":"column-198987","name":"intObjType","name_without_path":"intObjType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198988","object_id":"column-198988","name":"intObjTypeName","name_without_path":"intObjTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198989","object_id":"column-198989","name":"cObj","name_without_path":"cObj","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198990","object_id":"column-198990","name":"cObjName","name_without_path":"cObjName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198991","object_id":"column-198991","name":"cObj_P","name_without_path":"cObj_P","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198992","object_id":"column-198992","name":"cObj_E","name_without_path":"cObj_E","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198993","object_id":"column-198993","name":"cEQTypeCode","name_without_path":"cEQTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198994","object_id":"column-198994","name":"cEQTypeName","name_without_path":"cEQTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198995","object_id":"column-198995","name":"cLBCode","name_without_path":"cLBCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198996","object_id":"column-198996","name":"cLBName","name_without_path":"cLBName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198997","object_id":"column-198997","name":"dtPlanStart","name_without_path":"dtPlanStart","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198998","object_id":"column-198998","name":"dtPlanEnd","name_without_path":"dtPlanEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-198999","object_id":"column-198999","name":"cWorkDep","name_without_path":"cWorkDep","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199000","object_id":"column-199000","name":"cWorkDepName","name_without_path":"cWorkDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199001","object_id":"column-199001","name":"cUseDep","name_without_path":"cUseDep","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199002","object_id":"column-199002","name":"cUseDepName","name_without_path":"cUseDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199003","object_id":"column-199003","name":"cPlaner","name_without_path":"cPlaner","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199004","object_id":"column-199004","name":"cPlanerName","name_without_path":"cPlanerName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199005","object_id":"column-199005","name":"intFlag","name_without_path":"intFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199006","object_id":"column-199006","name":"intFlagName","name_without_path":"intFlagName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199007","object_id":"column-199007","name":"intPlan","name_without_path":"intPlan","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199008","object_id":"column-199008","name":"intPlanName","name_without_path":"intPlanName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199009","object_id":"column-199009","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199010","object_id":"column-199010","name":"dtDate","name_without_path":"dtDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199011","object_id":"column-199011","name":"cChecker","name_without_path":"cChecker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199012","object_id":"column-199012","name":"dtAudit","name_without_path":"dtAudit","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199013","object_id":"column-199013","name":"cWorkCode","name_without_path":"cWorkCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199014","object_id":"column-199014","name":"cNext","name_without_path":"cNext","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199015","object_id":"column-199015","name":"dtNext","name_without_path":"dtNext","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199016","object_id":"column-199016","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199017","object_id":"column-199017","name":"cMemo","name_without_path":"cMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199018","object_id":"column-199018","name":"cgg","name_without_path":"cgg","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199019","object_id":"column-199019","name":"cxh","name_without_path":"cxh","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199020","object_id":"column-199020","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199021","object_id":"column-199021","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199022","object_id":"column-199022","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199023","object_id":"column-199023","name":"cDefine4","name_without_path":"cDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199024","object_id":"column-199024","name":"cDefine5","name_without_path":"cDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199025","object_id":"column-199025","name":"cDefine6","name_without_path":"cDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199026","object_id":"column-199026","name":"cDefine7","name_without_path":"cDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199027","object_id":"column-199027","name":"cDefine8","name_without_path":"cDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199028","object_id":"column-199028","name":"cDefine9","name_without_path":"cDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199029","object_id":"column-199029","name":"cDefine10","name_without_path":"cDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199030","object_id":"column-199030","name":"cDefine11","name_without_path":"cDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199031","object_id":"column-199031","name":"cDefine12","name_without_path":"cDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199032","object_id":"column-199032","name":"cDefine13","name_without_path":"cDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199033","object_id":"column-199033","name":"cDefine14","name_without_path":"cDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199034","object_id":"column-199034","name":"cDefine15","name_without_path":"cDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199035","object_id":"column-199035","name":"cDefine16","name_without_path":"cDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199036","object_id":"column-199036","name":"intplanstate","name_without_path":"intplanstate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199037","object_id":"column-199037","name":"cSysBarCode","name_without_path":"cSysBarCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};