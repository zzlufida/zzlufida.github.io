window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11698","name":"NE_GetReturnHead_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create  VIEW [NE_GetReturnHead_View]  \r\nAS  \r\nSELECT h.ID as VoucherId, Cast(h.ts As money) As ts, h.OperationTypeCode as strTypeCode,   \r\n      NE_OperationType.Name AS strTypeName, h.Code as strVouchID,    \r\n      h.ReturnDate as ReturnDate,   \r\n      h.DeptID as DeptID,\r\n      Department.cDepName AS strDepart, \r\n      h.AgentID as AgentID, --录入人  \r\n      Person_1.cPersonName AS strLoan, h.ItemClassID as strItemClassID,   \r\n      fitem.citem_name AS strItemClass, h.ItemID as strItemID,   \r\n      h.BudgetItemID as strBudItemID,   \r\n      h.ExchangeRate as fltRate, h.ReturnMoney as dblMoney,   \r\n      h.LocalMoney as dblOldMoney, h.Used as strUsed,   \r\n      h.ReturnPersonID as ReturnPersonID,\r\n      h.AuditState as nauditstate,   \r\n      h.AuditorID as strAgreeID, h.AuditorID as strAuditorID,\r\n      h.AgentID as strMakerID,   \r\n      convert(nvarchar(10),h.AuditDate,120) as dtauditdate,h.AuditInfo as sauditinfo,   \r\n      h.cDefine1,   \r\n      h.cDefine2, h.cDefine4,   \r\n      h.cDefine3, h.cDefine5,   \r\n      h.cDefine6, h.cDefine7,   \r\n      h.cDefine8, h.cDefine9,   \r\n      h.cDefine10, h.cDefine11,   \r\n      h.cDefine12, h.cDefine13,   \r\n      h.cDefine14, h.cDefine15,   \r\n      h.cDefine16, --h.AutoID,   \r\n      BGItem.cItemName AS strBudItem, \r\n      h.Port1 as strPort1, h.Port1Value as strPort1Value, \r\n      h.Port2 as strPort2, h.Port2Value as strPort2Value, \r\n      h.Port3 as strPort3, h.Port3Value as strPort3Value, \r\n\t  h.Port4 as strPort4, h.Port4Value as strPort4Value,  \r\n\t  h.Port5 as strPort5, h.Port5Value as strPort5Value,  \r\n\t  h.Port6 as strPort6, h.Port6Value as strPort6Value,  \r\n      NE_AuditType.AuditName as blnAudi,NE_AuditType.LocaleID,  \r\n      h.OverBudget as intOverBud,\r\n      h.CusCode as CCusCode,\r\n      cus.ccusAbbname as cCusName,\r\n      h.VenCode as CVenCode,\r\n      ven.cvenabbname as cVenName,  \r\n      h.OverBudgetAuditDesc as strOverDesc,h.OverBudgetAuditor strOverPerson,\r\n      convert(nvarchar(10),h.OverBudgetAuditDate,126) as strOverDate,\r\n      h.VouchState as nState,h.PrintCount nPrintCount ,h.AuditorID as strEndAuditorID,h.IsWfControlled  \r\n  \r\nFROM Person Person_1 RIGHT OUTER JOIN  \r\n      NE_ReturnVouch h Left join NE_AuditType on h.IsAudit=NE_AuditType.AuditFlag LEFT OUTER JOIN  \r\n      BG_V_CtrlItem    \r\n      BGItem ON   \r\n      h.BudgetItemID = BGItem.cItemCode COLLATE Chinese_PRC_CI_AS ON  \r\n      Person_1.cPersonCode = h.ReturnPersonID LEFT OUTER JOIN  \r\n      Department ON   \r\n      h.DeptID = Department.cDepCode LEFT OUTER JOIN  \r\n      fitem ON   \r\n      h.ItemClassID = fitem.citem_class LEFT OUTER JOIN  \r\n      NE_OperationType ON   \r\n      h.OperationTypeCode = NE_OperationType.Code  \r\n      LEFT JOIN Customer cus on cus.cCusCode = h.CusCode   \r\n      LEFT JOIN Vendor ven on ven.cVenCode = h.VenCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_GetReturnHead_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-249572","object_id":"column-249572","name":"VoucherId","name_without_path":"VoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249573","object_id":"column-249573","name":"ts","name_without_path":"ts","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249574","object_id":"column-249574","name":"strTypeCode","name_without_path":"strTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249575","object_id":"column-249575","name":"strTypeName","name_without_path":"strTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249576","object_id":"column-249576","name":"strVouchID","name_without_path":"strVouchID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249577","object_id":"column-249577","name":"ReturnDate","name_without_path":"ReturnDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249578","object_id":"column-249578","name":"DeptID","name_without_path":"DeptID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249579","object_id":"column-249579","name":"strDepart","name_without_path":"strDepart","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249580","object_id":"column-249580","name":"AgentID","name_without_path":"AgentID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249581","object_id":"column-249581","name":"strLoan","name_without_path":"strLoan","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249582","object_id":"column-249582","name":"strItemClassID","name_without_path":"strItemClassID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249583","object_id":"column-249583","name":"strItemClass","name_without_path":"strItemClass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249584","object_id":"column-249584","name":"strItemID","name_without_path":"strItemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249585","object_id":"column-249585","name":"strBudItemID","name_without_path":"strBudItemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249586","object_id":"column-249586","name":"fltRate","name_without_path":"fltRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249587","object_id":"column-249587","name":"dblMoney","name_without_path":"dblMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249588","object_id":"column-249588","name":"dblOldMoney","name_without_path":"dblOldMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249589","object_id":"column-249589","name":"strUsed","name_without_path":"strUsed","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249590","object_id":"column-249590","name":"ReturnPersonID","name_without_path":"ReturnPersonID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249591","object_id":"column-249591","name":"nauditstate","name_without_path":"nauditstate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249592","object_id":"column-249592","name":"strAgreeID","name_without_path":"strAgreeID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249593","object_id":"column-249593","name":"strAuditorID","name_without_path":"strAuditorID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249594","object_id":"column-249594","name":"strMakerID","name_without_path":"strMakerID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249595","object_id":"column-249595","name":"dtauditdate","name_without_path":"dtauditdate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249596","object_id":"column-249596","name":"sauditinfo","name_without_path":"sauditinfo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249597","object_id":"column-249597","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249598","object_id":"column-249598","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249599","object_id":"column-249599","name":"cDefine4","name_without_path":"cDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249600","object_id":"column-249600","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249601","object_id":"column-249601","name":"cDefine5","name_without_path":"cDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249602","object_id":"column-249602","name":"cDefine6","name_without_path":"cDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249603","object_id":"column-249603","name":"cDefine7","name_without_path":"cDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249604","object_id":"column-249604","name":"cDefine8","name_without_path":"cDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249605","object_id":"column-249605","name":"cDefine9","name_without_path":"cDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249606","object_id":"column-249606","name":"cDefine10","name_without_path":"cDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249607","object_id":"column-249607","name":"cDefine11","name_without_path":"cDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249608","object_id":"column-249608","name":"cDefine12","name_without_path":"cDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249609","object_id":"column-249609","name":"cDefine13","name_without_path":"cDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249610","object_id":"column-249610","name":"cDefine14","name_without_path":"cDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249611","object_id":"column-249611","name":"cDefine15","name_without_path":"cDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249612","object_id":"column-249612","name":"cDefine16","name_without_path":"cDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249613","object_id":"column-249613","name":"strBudItem","name_without_path":"strBudItem","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249614","object_id":"column-249614","name":"strPort1","name_without_path":"strPort1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249615","object_id":"column-249615","name":"strPort1Value","name_without_path":"strPort1Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249616","object_id":"column-249616","name":"strPort2","name_without_path":"strPort2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249617","object_id":"column-249617","name":"strPort2Value","name_without_path":"strPort2Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249618","object_id":"column-249618","name":"strPort3","name_without_path":"strPort3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249619","object_id":"column-249619","name":"strPort3Value","name_without_path":"strPort3Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249620","object_id":"column-249620","name":"strPort4","name_without_path":"strPort4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249621","object_id":"column-249621","name":"strPort4Value","name_without_path":"strPort4Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249622","object_id":"column-249622","name":"strPort5","name_without_path":"strPort5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249623","object_id":"column-249623","name":"strPort5Value","name_without_path":"strPort5Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249624","object_id":"column-249624","name":"strPort6","name_without_path":"strPort6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249625","object_id":"column-249625","name":"strPort6Value","name_without_path":"strPort6Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249626","object_id":"column-249626","name":"blnAudi","name_without_path":"blnAudi","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249627","object_id":"column-249627","name":"LocaleID","name_without_path":"LocaleID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249628","object_id":"column-249628","name":"intOverBud","name_without_path":"intOverBud","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249629","object_id":"column-249629","name":"CCusCode","name_without_path":"CCusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249630","object_id":"column-249630","name":"cCusName","name_without_path":"cCusName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249631","object_id":"column-249631","name":"CVenCode","name_without_path":"CVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249632","object_id":"column-249632","name":"cVenName","name_without_path":"cVenName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249633","object_id":"column-249633","name":"strOverDesc","name_without_path":"strOverDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249634","object_id":"column-249634","name":"strOverPerson","name_without_path":"strOverPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249635","object_id":"column-249635","name":"strOverDate","name_without_path":"strOverDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249636","object_id":"column-249636","name":"nState","name_without_path":"nState","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249637","object_id":"column-249637","name":"nPrintCount","name_without_path":"nPrintCount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249638","object_id":"column-249638","name":"strEndAuditorID","name_without_path":"strEndAuditorID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249639","object_id":"column-249639","name":"IsWfControlled","name_without_path":"IsWfControlled","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};