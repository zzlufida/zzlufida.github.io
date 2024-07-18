window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11981","name":"QM_QAscendCheck","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW DBO.QM_QAscendCheck  \r\nAS  \r\n  \r\nSelect   \r\nCase T.CCheckTypeCode   \r\n  When 'ARR' Then (select EnumName from AA_Enum where EnumType='ScmBustache' and EnumCode='PU' and LocaleId=DBO.UDF_GetLocaleID())   \r\n  When 'SUB' Then (select EnumName from AA_Enum where EnumType='ScmBustache' and EnumCode='OM' and LocaleId=DBO.UDF_GetLocaleID())  \r\n  When 'PRO' Then (select EnumName from AA_Enum where EnumType='ScmBustache' and EnumCode='XX' and LocaleId=DBO.UDF_GetLocaleID())  \r\n  When 'ISS' Then (select EnumName from AA_Enum where EnumType='ScmBustache' and EnumCode='SA' and LocaleId=DBO.UDF_GetLocaleID())   \r\n  When 'RET' Then (select EnumName from AA_Enum where EnumType='ScmBustache' and EnumCode='SA' and LocaleId=DBO.UDF_GetLocaleID())  \r\nEnd AS cBustache,  \r\nCase T.CCheckTypeCode   \r\n  When 'ARR' Then 'SCM29'   \r\n  When 'SUB' Then 'SCM38'   \r\n  When 'PRO' Then 'SCM21'   \r\n  When 'ISS' Then 'SCM06'   \r\n  When 'RET' Then 'SCM11'   \r\nEnd AS cVouchtypeCode,  \r\nCase T.CCheckTypeCode   \r\n  When 'ARR' Then (select cVouchtypeName from ScmAscendInfo_lang where ScmAscendInfo_lang.cVouchtypeCode='SCM29' and localeid=DBO.UDF_GetLocaleID())  \r\n  When 'SUB' Then (select cVouchtypeName from ScmAscendInfo_lang where ScmAscendInfo_lang.cVouchtypeCode='SCM38' and localeid=DBO.UDF_GetLocaleID())  \r\n  When 'PRO' Then (select cVouchtypeName from ScmAscendInfo_lang where ScmAscendInfo_lang.cVouchtypeCode='SCM21' and localeid=DBO.UDF_GetLocaleID())  \r\n  When 'ISS' Then (select cVouchtypeName from ScmAscendInfo_lang where ScmAscendInfo_lang.cVouchtypeCode='SCM06' and localeid=DBO.UDF_GetLocaleID())  \r\n  When 'RET' Then (select cVouchtypeName from ScmAscendInfo_lang where ScmAscendInfo_lang.cVouchtypeCode='SCM11' and localeid=DBO.UDF_GetLocaleID())  \r\nEnd AS cVouchtypeName,  \r\ncInspectCode AS cVouchCode,dDate,  \r\n  \r\nNULL AS cBusType,   --业务类型  \r\nNULL AS cSTCode,   --采购/销售类型编码  \r\nNULL AS cSTName,   --采购/销售类型名称  \r\nNULL AS cRDCode,   --收发类别编码  \r\nNULL AS cRDName,   --收发类别名称  \r\nNULL AS cLinkCode,  --往来单位编码  \r\nNULL AS cLinkName,   --往来单位名称  \r\n  \r\nT.cDepCode,Department.cDepName,  \r\ncMaker AS cPersonCode,Person.cPersonName,  \r\nT.cWhCode,WareHouse.cWhName,  \r\nT.cInvCode,Inventory.cInvAddCode,Inventory.cInvName,Inventory.cInvStd,  \r\nInventory.cInvDefine1,Inventory.cInvDefine2,Inventory.cInvDefine3,Inventory.cInvDefine4,  \r\nInventory.cInvDefine5,Inventory.cInvDefine6,Inventory.cInvDefine7,Inventory.cInvDefine8,  \r\nInventory.cInvDefine9,Inventory.cInvDefine10,Inventory.cInvDefine11,Inventory.cInvDefine12,  \r\nInventory.cInvDefine13,Inventory.cInvDefine14,Inventory.cInvDefine15,Inventory.cInvDefine16,  \r\nT.cFree1,T.cFree2,T.cFree3,T.cFree4,T.cFree5,T.cFree6,T.cFree7,T.cFree8,T.cFree9,T.cFree10,  \r\n  \r\nInventory.cComUnitCode AS cComUnitCode,Unit1.cComUnitName AS cComUnitName,  \r\nT.fquantity AS fQuantity,  \r\nT.cUnitID AS cUnitID,Unit2.cComUnitName AS cUnitName,  \r\nT.fNum AS fNum,T.fChangRate AS iChangRate,  \r\n  \r\nT.cBatch AS cBatch,t.imassdate,T.cmassunit ,T.dprodate AS dmDate,T.dvDate AS dvDate,  \r\n  \r\nNULL AS cInType,   --入库单类型  \r\nNULL AS cInVouchCode,  --入库单号  \r\n  \r\nT.cVenCode,VENDOR.cVenName AS cVenName,  \r\nT.iordertype AS cOrderType,T.csoordercode AS cSOCode,  \r\nCASE T.IORDERTYPE  \r\n    WHEN 1 THEN DBO.SO_SODETAILS.IROWNO     \r\n    WHEN 3 THEN DBO.EX_ORDERDETAIL.IROWNO  \r\n    ELSE NULL  \r\nEND AS iSOSeq,  \r\nT.ISOORDERAUTOID AS iSoDid,  \r\n  \r\nNULL AS cSeq,   --序列号  \r\nNULL AS iInID,  --入库单主表ID  \r\nNULL AS iInAutoID, --入库单子表ID  \r\nNULL AS iInPutID,  --出库追踪入库ID  \r\n  \r\nT.inspectautoid as SourceAutoID,  \r\n  \r\n--上游业务类型编码  \r\nCase T.CCheckTypeCode   \r\n  When 'ARR' Then 'SCM47'   \r\n  When 'SUB' Then 'SCM45'   \r\n  When 'PRO' Then 'SCM46'   \r\n  When 'ISS' Then 'SCM05'   \r\n  When 'RET' Then 'SCM10'   \r\nEnd AS SourceVouchTypeCode,  \r\n  \r\nT.ID,T.ID AS AutoID,  \r\n  \r\n--业务流程顺序  \r\nCase T.CCheckTypeCode   \r\n  When 'ARR' Then (select iorder from ScmAscendInfo_lang where ScmAscendInfo_lang.cVouchtypeCode='SCM29' and localeid=DBO.UDF_GetLocaleID())  \r\n  When 'SUB' Then (select iorder from ScmAscendInfo_lang where ScmAscendInfo_lang.cVouchtypeCode='SCM38' and localeid=DBO.UDF_GetLocaleID())   \r\n  When 'PRO' Then (select iorder from ScmAscendInfo_lang where ScmAscendInfo_lang.cVouchtypeCode='SCM21' and localeid=DBO.UDF_GetLocaleID())  \r\n  When 'ISS' Then (select iorder from ScmAscendInfo_lang where ScmAscendInfo_lang.cVouchtypeCode='SCM06' and localeid=DBO.UDF_GetLocaleID())  \r\n  When 'RET' Then (select iorder from ScmAscendInfo_lang where ScmAscendInfo_lang.cVouchtypeCode='SCM11' and localeid=DBO.UDF_GetLocaleID())  \r\nEnd AS iOrder,  \r\n  \r\niVTID as VT_ID  \r\nFrom  \r\nQmCheckVoucher T  \r\nLeft Join Department On T.cDepcode = Department.cDepcode  \r\nLeft Join Person on t.cMaker = Person.cPersonCode  \r\nLeft Join WareHouse on T.cWhCode = WareHouse.cWhCode  \r\nLeft Join Inventory on T.cInvCode = Inventory.cInvCode  \r\nLeft Join ComputationUnit AS Unit1 on Inventory.cComUnitCode = Unit1.cComUnitCode    \r\nLeft Join ComputationUnit AS Unit2 on T.cUnitID = Unit2.cComUnitCode     \r\nLeft Join VENDOR ON T.CVENCODE = VENDOR.CVENCODE   \r\nLeft Join SO_SODETAILS ON CAST(SO_SODETAILS.ISOSID as nvarchar(60)) = T.ISOORDERAUTOID  and T.IORDERTYPE =1\r\nLeft Join EX_ORDERDETAIL ON cast(EX_ORDERDETAIL.AUTOID as nvarchar(60)) = T.ISOORDERAUTOID  and T.IORDERTYPE =1\r\n--Left Join vouchertemplates ON VT_CardNumber = T.cVouchType and VT_TemplateMode = 0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"QM_QAscendCheck"},{"field":"Type","value":"View"}],"columns":[{"id":"column-266272","object_id":"column-266272","name":"cBustache","name_without_path":"cBustache","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266273","object_id":"column-266273","name":"cVouchtypeCode","name_without_path":"cVouchtypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266274","object_id":"column-266274","name":"cVouchtypeName","name_without_path":"cVouchtypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266275","object_id":"column-266275","name":"cVouchCode","name_without_path":"cVouchCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266276","object_id":"column-266276","name":"dDate","name_without_path":"dDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266277","object_id":"column-266277","name":"cBusType","name_without_path":"cBusType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266278","object_id":"column-266278","name":"cSTCode","name_without_path":"cSTCode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266279","object_id":"column-266279","name":"cSTName","name_without_path":"cSTName","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266280","object_id":"column-266280","name":"cRDCode","name_without_path":"cRDCode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266281","object_id":"column-266281","name":"cRDName","name_without_path":"cRDName","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266282","object_id":"column-266282","name":"cLinkCode","name_without_path":"cLinkCode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266283","object_id":"column-266283","name":"cLinkName","name_without_path":"cLinkName","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266284","object_id":"column-266284","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266285","object_id":"column-266285","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266286","object_id":"column-266286","name":"cPersonCode","name_without_path":"cPersonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266287","object_id":"column-266287","name":"cPersonName","name_without_path":"cPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266288","object_id":"column-266288","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266289","object_id":"column-266289","name":"cWhName","name_without_path":"cWhName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266290","object_id":"column-266290","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266291","object_id":"column-266291","name":"cInvAddCode","name_without_path":"cInvAddCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266292","object_id":"column-266292","name":"cInvName","name_without_path":"cInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266293","object_id":"column-266293","name":"cInvStd","name_without_path":"cInvStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266294","object_id":"column-266294","name":"cInvDefine1","name_without_path":"cInvDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266295","object_id":"column-266295","name":"cInvDefine2","name_without_path":"cInvDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266296","object_id":"column-266296","name":"cInvDefine3","name_without_path":"cInvDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266297","object_id":"column-266297","name":"cInvDefine4","name_without_path":"cInvDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266298","object_id":"column-266298","name":"cInvDefine5","name_without_path":"cInvDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266299","object_id":"column-266299","name":"cInvDefine6","name_without_path":"cInvDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266300","object_id":"column-266300","name":"cInvDefine7","name_without_path":"cInvDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266301","object_id":"column-266301","name":"cInvDefine8","name_without_path":"cInvDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266302","object_id":"column-266302","name":"cInvDefine9","name_without_path":"cInvDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266303","object_id":"column-266303","name":"cInvDefine10","name_without_path":"cInvDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266304","object_id":"column-266304","name":"cInvDefine11","name_without_path":"cInvDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266305","object_id":"column-266305","name":"cInvDefine12","name_without_path":"cInvDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266306","object_id":"column-266306","name":"cInvDefine13","name_without_path":"cInvDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266307","object_id":"column-266307","name":"cInvDefine14","name_without_path":"cInvDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266308","object_id":"column-266308","name":"cInvDefine15","name_without_path":"cInvDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266309","object_id":"column-266309","name":"cInvDefine16","name_without_path":"cInvDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266310","object_id":"column-266310","name":"cFree1","name_without_path":"cFree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266311","object_id":"column-266311","name":"cFree2","name_without_path":"cFree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266312","object_id":"column-266312","name":"cFree3","name_without_path":"cFree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266313","object_id":"column-266313","name":"cFree4","name_without_path":"cFree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266314","object_id":"column-266314","name":"cFree5","name_without_path":"cFree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266315","object_id":"column-266315","name":"cFree6","name_without_path":"cFree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266316","object_id":"column-266316","name":"cFree7","name_without_path":"cFree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266317","object_id":"column-266317","name":"cFree8","name_without_path":"cFree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266318","object_id":"column-266318","name":"cFree9","name_without_path":"cFree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266319","object_id":"column-266319","name":"cFree10","name_without_path":"cFree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266320","object_id":"column-266320","name":"cComUnitCode","name_without_path":"cComUnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266321","object_id":"column-266321","name":"cComUnitName","name_without_path":"cComUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266322","object_id":"column-266322","name":"fQuantity","name_without_path":"fQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266323","object_id":"column-266323","name":"cUnitID","name_without_path":"cUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266324","object_id":"column-266324","name":"cUnitName","name_without_path":"cUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266325","object_id":"column-266325","name":"fNum","name_without_path":"fNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266326","object_id":"column-266326","name":"iChangRate","name_without_path":"iChangRate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266327","object_id":"column-266327","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266328","object_id":"column-266328","name":"imassdate","name_without_path":"imassdate","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266329","object_id":"column-266329","name":"cmassunit","name_without_path":"cmassunit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266330","object_id":"column-266330","name":"dmDate","name_without_path":"dmDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266331","object_id":"column-266331","name":"dvDate","name_without_path":"dvDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266332","object_id":"column-266332","name":"cInType","name_without_path":"cInType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266333","object_id":"column-266333","name":"cInVouchCode","name_without_path":"cInVouchCode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266334","object_id":"column-266334","name":"cVenCode","name_without_path":"cVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266335","object_id":"column-266335","name":"cVenName","name_without_path":"cVenName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266336","object_id":"column-266336","name":"cOrderType","name_without_path":"cOrderType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266337","object_id":"column-266337","name":"cSOCode","name_without_path":"cSOCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266338","object_id":"column-266338","name":"iSOSeq","name_without_path":"iSOSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266339","object_id":"column-266339","name":"iSoDid","name_without_path":"iSoDid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266340","object_id":"column-266340","name":"cSeq","name_without_path":"cSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266341","object_id":"column-266341","name":"iInID","name_without_path":"iInID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266342","object_id":"column-266342","name":"iInAutoID","name_without_path":"iInAutoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266343","object_id":"column-266343","name":"iInPutID","name_without_path":"iInPutID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266344","object_id":"column-266344","name":"SourceAutoID","name_without_path":"SourceAutoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266345","object_id":"column-266345","name":"SourceVouchTypeCode","name_without_path":"SourceVouchTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266346","object_id":"column-266346","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266347","object_id":"column-266347","name":"AutoID","name_without_path":"AutoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266348","object_id":"column-266348","name":"iOrder","name_without_path":"iOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-266349","object_id":"column-266349","name":"VT_ID","name_without_path":"VT_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};