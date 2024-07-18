window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14142","name":"vmReturnHeadItem","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view vmReturnHeadItem\r\nas\r\nSELECT VouchEntity.[Used] as [ctext], VouchEntity.[ts] as [tsMain], N'' as [OverBudgetDesc], VouchEntity.[AgentDate] as [AgentDate], VouchEntity.[AgentID] as [AgentID], VouchEntity.[Attachment] as [Attachment], VouchEntity.[Attachment_UAPRuntime_FileID] as [Attachment_UAPRuntime_FileID], VouchEntity.[AuditDate] as [AuditDate], VouchEntity.[AuditInfo] as [AuditInfo], VouchEntity.[AuditorID] as [AuditorID], VouchEntity.[AuditState] as [AuditState], VouchEntity.[AutoID] as [AutoID], VouchEntity.[BudgetItemID] as [BudgetItemID], VouchEntity.[BudgetState] as [BudgetState], VouchEntity.[Code] as [Code], VouchEntity.[Currency] as [Currency], VouchEntity.[CusCode] as [CusCode], VouchEntity.[DeptID] as [DeptID], VouchEntity.[ExchangeRate] as [ExchangeRate], VouchEntity.[Formula] as [Formula], VouchEntity.[ID] as [ID], VouchEntity.[IsAudit] as [IsAudit], VouchEntity.[IsFinalAudit] as [IsFinalAudit], VouchEntity.[IsLoanGenerate] as [IsLoanGenerate], VouchEntity.[IsMidCurrency] as [IsMidCurrency], VouchEntity.[IsProxyVoucher] as [IsProxyVoucher], VouchEntity.[IsSettle] as [IsSettle], VouchEntity.[IsWfControlled] as [IsWfControlled], VouchEntity.[ItemClassID] as [ItemClassID], VouchEntity.[ItemID] as [ItemID], VouchEntity.[LocalMoney] as [LocalMoney], VouchEntity.[MakerID] as [MakerID], VouchEntity.[MidCurrency] as [MidCurrency], VouchEntity.[MidReturnMoney] as [MidReturnMoney], VouchEntity.[Name] as [Name], VouchEntity.[OperationTypeCode] as [OperationTypeCode], VouchEntity.[PayType] as [PayType], VouchEntity.[PrintCount] as [PrintCount], VouchEntity.[PZGUID] as [PZGUID], VouchEntity.[RegisterCheckFlag] as [RegisterCheckFlag], VouchEntity.[ReturnDate] as [ReturnDate], VouchEntity.[ReturnMoney] as [ReturnMoney], VouchEntity.[ReturnPersonID] as [ReturnPersonID], VouchEntity.[SubmittedBy] as [SubmittedBy], VouchEntity.[SubmittedDate] as [SubmittedDate], VouchEntity.[UAPRuntime_RowNO] as [UAPRuntime_RowNO], VouchEntity.[Used] as [Used], VouchEntity.[VouchState] as [VouchState], VouchEntity.[SystemID] as [SystemID], (CASE VouchEntity.[AuditState]  WHEN N'1' THEN N'待审' WHEN N'2' THEN N'已审' ELSE cast(VouchEntity.[AuditState] as nvarchar) END) as [AuditState_Enum], (CASE VouchEntity.[VouchState]  WHEN N'0' THEN N'已保存' WHEN N'1' THEN N'已提交' WHEN N'2' THEN N'审批中' WHEN N'3' THEN N'审批不同意' WHEN N'4' THEN N'审批同意' WHEN N'5' THEN N'已冲借款' WHEN N'6' THEN N'部分冲借款' WHEN N'7' THEN N'已制单' ELSE cast(VouchEntity.[VouchState] as nvarchar) END) as [VouchState_Enum], (CASE VouchEntity.[PayType]  WHEN N'0' THEN N'现金支付' WHEN N'1' THEN N'限额票据支付' WHEN N'2' THEN N'非限额票据支付' ELSE cast(VouchEntity.[PayType] as nvarchar) END) as [PayType_Enum], VouchEntity.[cDefine1] as [cDefine1], VouchEntity.[cDefine10] as [cDefine10], VouchEntity.[cDefine11] as [cDefine11], VouchEntity.[cDefine12] as [cDefine12], VouchEntity.[cDefine13] as [cDefine13], VouchEntity.[cDefine14] as [cDefine14], VouchEntity.[cDefine15] as [cDefine15], VouchEntity.[cDefine16] as [cDefine16], VouchEntity.[cDefine2] as [cDefine2], VouchEntity.[cDefine3] as [cDefine3], VouchEntity.[cDefine4] as [cDefine4], VouchEntity.[cDefine5] as [cDefine5], VouchEntity.[cDefine6] as [cDefine6], VouchEntity.[cDefine7] as [cDefine7], VouchEntity.[cDefine8] as [cDefine8], VouchEntity.[cDefine9] as [cDefine9], VouchEntity.[IReturnCount] as [ireturncount], VouchEntity.[IVerifyState] as [iverifystate], VouchEntity.[AuditDateTime] as [AuditDateTime], VouchEntity.[VenCode] as [VenCode], VouchEntity.[cSysBarCode] as [cSysBarCode], OperationTypeEntity.[Code] as [Code_Type], OperationTypeEntity.[Name] as [Name_Type], DeptEntity.[cDepCode] as [cDepCode], DeptEntity.[cDepName] as [cDepName], ItemClassEntity.[citem_class] as [citem_class], ItemClassEntity.[citem_name] as [citem_name], ItemEntity.[citemcode] as [citemcode], ItemEntity.[citemname] as [citemname], VouchEntity.Currency as [cexch_name], VouchEntity.MidCurrency as [cexch_name_Mid], PersonEntity.[cPersonCode] as [cPsn_Num], PersonEntity.[cPersonName] as [cPsn_Name], VendorEntity.[cVenCode] as [cVenCode], VendorEntity.[cVenName] as [cVenName], CustomerEntity.[cCusCode] as [cCusCode], CustomerEntity.[cCusName] as [cCusName], OperationTypeEntity.PrintModelCode as [ivtid]\r\n \r\nFROM [NE_ReturnVouch] AS VouchEntity\r\nLEFT JOIN [Vendor] AS VendorEntity ON VouchEntity.[VenCode]=VendorEntity.[cVenCode]\r\nLEFT JOIN [Person] AS PersonEntity ON VouchEntity.[ReturnPersonID]=PersonEntity.[cPersonCode]\r\nLEFT JOIN [vwNEfitemss] AS ItemEntity ON VouchEntity.[ItemID]=ItemEntity.[citemcode] and ItemEntity.citem_class=VouchEntity.[ItemClassID]\r\nLEFT JOIN [fitem] AS ItemClassEntity ON VouchEntity.[ItemClassID]=ItemClassEntity.[citem_class]\r\nLEFT JOIN [Customer] AS CustomerEntity ON VouchEntity.[CusCode]=CustomerEntity.[cCusCode]\r\nLEFT JOIN [Department] AS DeptEntity ON VouchEntity.[DeptID]=DeptEntity.[cDepCode]\r\nLEFT JOIN [NE_OperationType] AS OperationTypeEntity ON VouchEntity.[OperationTypeCode]=OperationTypeEntity.[Code]","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vmReturnHeadItem"},{"field":"Type","value":"View"}],"columns":[{"id":"column-418436","object_id":"column-418436","name":"ctext","name_without_path":"ctext","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418437","object_id":"column-418437","name":"tsMain","name_without_path":"tsMain","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418438","object_id":"column-418438","name":"OverBudgetDesc","name_without_path":"OverBudgetDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418439","object_id":"column-418439","name":"AgentDate","name_without_path":"AgentDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418440","object_id":"column-418440","name":"AgentID","name_without_path":"AgentID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418441","object_id":"column-418441","name":"Attachment","name_without_path":"Attachment","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"240","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418442","object_id":"column-418442","name":"Attachment_UAPRuntime_FileID","name_without_path":"Attachment_UAPRuntime_FileID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418443","object_id":"column-418443","name":"AuditDate","name_without_path":"AuditDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418444","object_id":"column-418444","name":"AuditInfo","name_without_path":"AuditInfo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418445","object_id":"column-418445","name":"AuditorID","name_without_path":"AuditorID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418446","object_id":"column-418446","name":"AuditState","name_without_path":"AuditState","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418447","object_id":"column-418447","name":"AutoID","name_without_path":"AutoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418448","object_id":"column-418448","name":"BudgetItemID","name_without_path":"BudgetItemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418449","object_id":"column-418449","name":"BudgetState","name_without_path":"BudgetState","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418450","object_id":"column-418450","name":"Code","name_without_path":"Code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418451","object_id":"column-418451","name":"Currency","name_without_path":"Currency","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418452","object_id":"column-418452","name":"CusCode","name_without_path":"CusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418453","object_id":"column-418453","name":"DeptID","name_without_path":"DeptID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418454","object_id":"column-418454","name":"ExchangeRate","name_without_path":"ExchangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418455","object_id":"column-418455","name":"Formula","name_without_path":"Formula","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418456","object_id":"column-418456","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418457","object_id":"column-418457","name":"IsAudit","name_without_path":"IsAudit","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418458","object_id":"column-418458","name":"IsFinalAudit","name_without_path":"IsFinalAudit","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418459","object_id":"column-418459","name":"IsLoanGenerate","name_without_path":"IsLoanGenerate","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418460","object_id":"column-418460","name":"IsMidCurrency","name_without_path":"IsMidCurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418461","object_id":"column-418461","name":"IsProxyVoucher","name_without_path":"IsProxyVoucher","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418462","object_id":"column-418462","name":"IsSettle","name_without_path":"IsSettle","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418463","object_id":"column-418463","name":"IsWfControlled","name_without_path":"IsWfControlled","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418464","object_id":"column-418464","name":"ItemClassID","name_without_path":"ItemClassID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418465","object_id":"column-418465","name":"ItemID","name_without_path":"ItemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418466","object_id":"column-418466","name":"LocalMoney","name_without_path":"LocalMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418467","object_id":"column-418467","name":"MakerID","name_without_path":"MakerID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418468","object_id":"column-418468","name":"MidCurrency","name_without_path":"MidCurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418469","object_id":"column-418469","name":"MidReturnMoney","name_without_path":"MidReturnMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418470","object_id":"column-418470","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418471","object_id":"column-418471","name":"OperationTypeCode","name_without_path":"OperationTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418472","object_id":"column-418472","name":"PayType","name_without_path":"PayType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418473","object_id":"column-418473","name":"PrintCount","name_without_path":"PrintCount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418474","object_id":"column-418474","name":"PZGUID","name_without_path":"PZGUID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418475","object_id":"column-418475","name":"RegisterCheckFlag","name_without_path":"RegisterCheckFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418476","object_id":"column-418476","name":"ReturnDate","name_without_path":"ReturnDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418477","object_id":"column-418477","name":"ReturnMoney","name_without_path":"ReturnMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418478","object_id":"column-418478","name":"ReturnPersonID","name_without_path":"ReturnPersonID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418479","object_id":"column-418479","name":"SubmittedBy","name_without_path":"SubmittedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418480","object_id":"column-418480","name":"SubmittedDate","name_without_path":"SubmittedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418481","object_id":"column-418481","name":"UAPRuntime_RowNO","name_without_path":"UAPRuntime_RowNO","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418482","object_id":"column-418482","name":"Used","name_without_path":"Used","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418483","object_id":"column-418483","name":"VouchState","name_without_path":"VouchState","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418484","object_id":"column-418484","name":"SystemID","name_without_path":"SystemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418485","object_id":"column-418485","name":"AuditState_Enum","name_without_path":"AuditState_Enum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418486","object_id":"column-418486","name":"VouchState_Enum","name_without_path":"VouchState_Enum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418487","object_id":"column-418487","name":"PayType_Enum","name_without_path":"PayType_Enum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418488","object_id":"column-418488","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418489","object_id":"column-418489","name":"cDefine10","name_without_path":"cDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418490","object_id":"column-418490","name":"cDefine11","name_without_path":"cDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418491","object_id":"column-418491","name":"cDefine12","name_without_path":"cDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418492","object_id":"column-418492","name":"cDefine13","name_without_path":"cDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418493","object_id":"column-418493","name":"cDefine14","name_without_path":"cDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418494","object_id":"column-418494","name":"cDefine15","name_without_path":"cDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418495","object_id":"column-418495","name":"cDefine16","name_without_path":"cDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418496","object_id":"column-418496","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418497","object_id":"column-418497","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418498","object_id":"column-418498","name":"cDefine4","name_without_path":"cDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418499","object_id":"column-418499","name":"cDefine5","name_without_path":"cDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418500","object_id":"column-418500","name":"cDefine6","name_without_path":"cDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418501","object_id":"column-418501","name":"cDefine7","name_without_path":"cDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418502","object_id":"column-418502","name":"cDefine8","name_without_path":"cDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418503","object_id":"column-418503","name":"cDefine9","name_without_path":"cDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418504","object_id":"column-418504","name":"ireturncount","name_without_path":"ireturncount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418505","object_id":"column-418505","name":"iverifystate","name_without_path":"iverifystate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418506","object_id":"column-418506","name":"AuditDateTime","name_without_path":"AuditDateTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418507","object_id":"column-418507","name":"VenCode","name_without_path":"VenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418508","object_id":"column-418508","name":"cSysBarCode","name_without_path":"cSysBarCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418509","object_id":"column-418509","name":"Code_Type","name_without_path":"Code_Type","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418510","object_id":"column-418510","name":"Name_Type","name_without_path":"Name_Type","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418511","object_id":"column-418511","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418512","object_id":"column-418512","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418513","object_id":"column-418513","name":"citem_class","name_without_path":"citem_class","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418514","object_id":"column-418514","name":"citem_name","name_without_path":"citem_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418515","object_id":"column-418515","name":"citemcode","name_without_path":"citemcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418516","object_id":"column-418516","name":"citemname","name_without_path":"citemname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418517","object_id":"column-418517","name":"cexch_name","name_without_path":"cexch_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418518","object_id":"column-418518","name":"cexch_name_Mid","name_without_path":"cexch_name_Mid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418519","object_id":"column-418519","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418520","object_id":"column-418520","name":"cPsn_Name","name_without_path":"cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418521","object_id":"column-418521","name":"cVenCode","name_without_path":"cVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418522","object_id":"column-418522","name":"cVenName","name_without_path":"cVenName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418523","object_id":"column-418523","name":"cCusCode","name_without_path":"cCusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418524","object_id":"column-418524","name":"cCusName","name_without_path":"cCusName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418525","object_id":"column-418525","name":"ivtid","name_without_path":"ivtid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};