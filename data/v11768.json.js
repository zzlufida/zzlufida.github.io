window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11768","name":"NE_VouchVerifierList_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[NE_VouchVerifierList_View]  \r\nas  \r\n select distinct NE_OperationType.Name as OperationTypeName,vouch.OperationTypeCode,NE_OperationType.TypeID,  \r\n vouch.Code as VouchCode,vouch.Name as VouchName,  \r\n convert(nvarchar(20),vouch.ExpenseDate,23)as OperationDate,department.cdepname as DeptName,  \r\n personloan.cpersonname as PersonName,fitem.citem_name as ItemClassName,fitems.citemname as ItemName,  \r\n bg_v_ctrlitem.cItemName as BudgetItemName,  \r\n vouch.Currency,vouch.ExpenseMoney as VouchMoney,  \r\n vouch.VerifiedMoney as VerifyMoney,vouch.Used,vouch.AgentID,  \r\n dbo.NE_GetAuditorID_FN(vouch.AuditorID,vouch.WFAuditorName,vouch.WFAction) AS AuditorID,  \r\n case vouch.WFAction when 1 then N'同意' when 2 then N'不同意' end as AuditResult,  \r\n dbo.NE_GetAuditOpinion_FN(vouch.AuditInfo,vouch.WFOpinion,vouch.WFAction) AS AuditInfo ,  \r\n dbo.NE_GetAuditDate_FN(vouch.AuditDate,vouch.WFAuditDate,vouch.WFAction) AS AuditDate ,     \r\n convert(nvarchar(20),vouch.HXDate,23) as HXDate,vouch.Verifier,Cast(vouch.ts As bigint) as ts,  \r\n vouch.ID,vouch.IsFinalAudit as IsAudit,isnull(vouch.AuditState,0) as AuditState,MakerID,vouch.DeptID,vouch.ExpenserID,  \r\n vouch.Port1,vouch.Port1value,vouch.Port2,vouch.Port2value,  \r\n vouch.Port3,vouch.Port3value,vouch.Port4,vouch.Port4value,  \r\n vouch.Port5,vouch.Port5value,vouch.Port6,vouch.Port6value,  \r\n vouch.BudgetItemID,vouch.ItemClassID,vouch.ItemID,  \r\n vouch.AuditorID as AgreeID,vouch.WFAction AS [action],   \r\n vouch.CusCode,cus.cCusName as CusName,   \r\n vouch.VenCode,ven.cVenName as VenName,   \r\n vouch.cDefine1,vouch.cDefine2,vouch.cDefine3,vouch.cDefine4,vouch.cDefine5,vouch.cDefine6,vouch.cDefine7,vouch.cDefine8,  \r\n vouch.cDefine9,vouch.cDefine10,vouch.cDefine11,vouch.cDefine12,vouch.cDefine13,vouch.cDefine14,vouch.cDefine15,vouch.cDefine16,  \r\n vouch.VouchState,vouch.PrintCount,  \r\n vouch.cCurrentAuditor AS tochecker,\r\n case when ISNULL(convert(nvarchar(50),ExpenseLoanInfo.ExpenseVouchID),'')<>'' and isnull(IsUsed,'-1')='-1' then\r\n 1 else 0 end as IsVerifierd   \r\n From NE_ExpenVouch As vouch with(nolock)   \r\n inner join NE_OperationType   \r\n   on vouch.OperationTypeCode = NE_OperationType.Code and NE_OperationType.TypeID=2  \r\n left join NE_ExpenseLoanInfo as ExpenseLoanInfo  \r\n  on vouch.ID=ExpenseLoanInfo.ExpenseVouchID  \r\n left join NE_ExpenseBalanceInfo_View as BalanceInfo  \r\n  on vouch.ID = BalanceInfo.VouchID  \r\n left join department on vouch.DeptID=department.cdepcode    \r\n left join person personloan on vouch.ExpenserID=personloan.cpersoncode   \r\n left join bg_v_ctrlitem on vouch.BudgetItemID=bg_v_ctrlitem.cItemCode   \r\n left join fitem on vouch.ItemClassID=fitem.citem_class   \r\n left join vwNEfitemss as fitems   \r\n  on fitem.citem_class=fitems.citem_class and vouch.ItemID=fitems.citemcode    \r\n LEFT JOIN Customer cus on cus.cCusCode = vouch.CusCode   \r\n LEFT JOIN Vendor ven on ven.cVenCode = vouch.VenCode  \r\n where isnull(vouch.AuditorID,'')<>''  \r\n  AND (vouch.PayState=0 or ExpenseLoanInfo.ID is not null or isnull(vouch.Verifier,'')<>'')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_VouchVerifierList_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-251237","object_id":"column-251237","name":"OperationTypeName","name_without_path":"OperationTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251238","object_id":"column-251238","name":"OperationTypeCode","name_without_path":"OperationTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251239","object_id":"column-251239","name":"TypeID","name_without_path":"TypeID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251240","object_id":"column-251240","name":"VouchCode","name_without_path":"VouchCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251241","object_id":"column-251241","name":"VouchName","name_without_path":"VouchName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251242","object_id":"column-251242","name":"OperationDate","name_without_path":"OperationDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251243","object_id":"column-251243","name":"DeptName","name_without_path":"DeptName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251244","object_id":"column-251244","name":"PersonName","name_without_path":"PersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251245","object_id":"column-251245","name":"ItemClassName","name_without_path":"ItemClassName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251246","object_id":"column-251246","name":"ItemName","name_without_path":"ItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251247","object_id":"column-251247","name":"BudgetItemName","name_without_path":"BudgetItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251248","object_id":"column-251248","name":"Currency","name_without_path":"Currency","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251249","object_id":"column-251249","name":"VouchMoney","name_without_path":"VouchMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251250","object_id":"column-251250","name":"VerifyMoney","name_without_path":"VerifyMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251251","object_id":"column-251251","name":"Used","name_without_path":"Used","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251252","object_id":"column-251252","name":"AgentID","name_without_path":"AgentID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251253","object_id":"column-251253","name":"AuditorID","name_without_path":"AuditorID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251254","object_id":"column-251254","name":"AuditResult","name_without_path":"AuditResult","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251255","object_id":"column-251255","name":"AuditInfo","name_without_path":"AuditInfo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251256","object_id":"column-251256","name":"AuditDate","name_without_path":"AuditDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251257","object_id":"column-251257","name":"HXDate","name_without_path":"HXDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251258","object_id":"column-251258","name":"Verifier","name_without_path":"Verifier","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251259","object_id":"column-251259","name":"ts","name_without_path":"ts","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251260","object_id":"column-251260","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251261","object_id":"column-251261","name":"IsAudit","name_without_path":"IsAudit","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251262","object_id":"column-251262","name":"AuditState","name_without_path":"AuditState","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251263","object_id":"column-251263","name":"MakerID","name_without_path":"MakerID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251264","object_id":"column-251264","name":"DeptID","name_without_path":"DeptID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251265","object_id":"column-251265","name":"ExpenserID","name_without_path":"ExpenserID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251266","object_id":"column-251266","name":"Port1","name_without_path":"Port1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251267","object_id":"column-251267","name":"Port1value","name_without_path":"Port1value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251268","object_id":"column-251268","name":"Port2","name_without_path":"Port2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251269","object_id":"column-251269","name":"Port2value","name_without_path":"Port2value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251270","object_id":"column-251270","name":"Port3","name_without_path":"Port3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251271","object_id":"column-251271","name":"Port3value","name_without_path":"Port3value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251272","object_id":"column-251272","name":"Port4","name_without_path":"Port4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251273","object_id":"column-251273","name":"Port4value","name_without_path":"Port4value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251274","object_id":"column-251274","name":"Port5","name_without_path":"Port5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251275","object_id":"column-251275","name":"Port5value","name_without_path":"Port5value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251276","object_id":"column-251276","name":"Port6","name_without_path":"Port6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251277","object_id":"column-251277","name":"Port6value","name_without_path":"Port6value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251278","object_id":"column-251278","name":"BudgetItemID","name_without_path":"BudgetItemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251279","object_id":"column-251279","name":"ItemClassID","name_without_path":"ItemClassID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251280","object_id":"column-251280","name":"ItemID","name_without_path":"ItemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251281","object_id":"column-251281","name":"AgreeID","name_without_path":"AgreeID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251282","object_id":"column-251282","name":"action","name_without_path":"action","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251283","object_id":"column-251283","name":"CusCode","name_without_path":"CusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251284","object_id":"column-251284","name":"CusName","name_without_path":"CusName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251285","object_id":"column-251285","name":"VenCode","name_without_path":"VenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251286","object_id":"column-251286","name":"VenName","name_without_path":"VenName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251287","object_id":"column-251287","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251288","object_id":"column-251288","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251289","object_id":"column-251289","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251290","object_id":"column-251290","name":"cDefine4","name_without_path":"cDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251291","object_id":"column-251291","name":"cDefine5","name_without_path":"cDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251292","object_id":"column-251292","name":"cDefine6","name_without_path":"cDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251293","object_id":"column-251293","name":"cDefine7","name_without_path":"cDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251294","object_id":"column-251294","name":"cDefine8","name_without_path":"cDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251295","object_id":"column-251295","name":"cDefine9","name_without_path":"cDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251296","object_id":"column-251296","name":"cDefine10","name_without_path":"cDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251297","object_id":"column-251297","name":"cDefine11","name_without_path":"cDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251298","object_id":"column-251298","name":"cDefine12","name_without_path":"cDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251299","object_id":"column-251299","name":"cDefine13","name_without_path":"cDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251300","object_id":"column-251300","name":"cDefine14","name_without_path":"cDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251301","object_id":"column-251301","name":"cDefine15","name_without_path":"cDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251302","object_id":"column-251302","name":"cDefine16","name_without_path":"cDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251303","object_id":"column-251303","name":"VouchState","name_without_path":"VouchState","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251304","object_id":"column-251304","name":"PrintCount","name_without_path":"PrintCount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251305","object_id":"column-251305","name":"tochecker","name_without_path":"tochecker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"400","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251306","object_id":"column-251306","name":"IsVerifierd","name_without_path":"IsVerifierd","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};