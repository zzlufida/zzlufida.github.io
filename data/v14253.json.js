window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14253","name":"vwFM_CrSub","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_CrSub\r\nAS\r\nSELECT dbo.FM_CrBill.dtDate AS N'日期', a.VT_Name AS N'单据模版名称',a.VT_Name AS N'查询单据名称',\r\n      dbo.FM_CrBill.strCrBillID AS N'业务编号',dbo.FM_CrBill.strCrBillID AS N'对应业务编号', dbo.FM_CrBill.dblInvest AS N'投资总额', \r\n      0 AS N'回收本金额', 0 AS N'结欠本金额', 0 AS N'应收利息额', 0 AS N'回收利息额', 0 AS N'结欠利息额', \r\n      0 AS N'结欠本利和', CASE WHEN ISNULL(dbo.FM_CrBill.strChecker, N'') \r\n      = N'' THEN N'否' ELSE N'是' END AS N'是否审核'\r\nFROM dbo.FM_CrBill LEFT OUTER JOIN\r\n      dbo.VoucherTemplates a ON dbo.FM_CrBill.VT_ID = a.VT_ID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_CrSub"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423021","object_id":"column-423021","name":"日期","name_without_path":"日期","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423022","object_id":"column-423022","name":"单据模版名称","name_without_path":"单据模版名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423023","object_id":"column-423023","name":"查询单据名称","name_without_path":"查询单据名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423024","object_id":"column-423024","name":"业务编号","name_without_path":"业务编号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423025","object_id":"column-423025","name":"对应业务编号","name_without_path":"对应业务编号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423026","object_id":"column-423026","name":"投资总额","name_without_path":"投资总额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423027","object_id":"column-423027","name":"回收本金额","name_without_path":"回收本金额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423028","object_id":"column-423028","name":"结欠本金额","name_without_path":"结欠本金额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423029","object_id":"column-423029","name":"应收利息额","name_without_path":"应收利息额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423030","object_id":"column-423030","name":"回收利息额","name_without_path":"回收利息额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423031","object_id":"column-423031","name":"结欠利息额","name_without_path":"结欠利息额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423032","object_id":"column-423032","name":"结欠本利和","name_without_path":"结欠本利和","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423033","object_id":"column-423033","name":"是否审核","name_without_path":"是否审核","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};