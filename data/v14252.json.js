window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14252","name":"vwFM_CrRet","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_CrRet\r\nAS\r\nSELECT dbo.FM_ReturnCr.dtDate AS N'日期', a.VT_Name AS N'单据模版名称', b.VT_Name  AS N'查询单据名称',\r\n      dbo.FM_ReturnCr.strReturnCrID AS N'业务编号',dbo.FM_ReturnCr.strCrBillID as N'对应业务编号', 0 AS N'投资总额', \r\n      isnull(dbo.FM_ReturnCr.dblReMon,0) AS N'回收本金额', \r\n      0 AS N'结欠本金额', \r\n      0 AS N'应收利息额', \r\n      isnull(dbo.FM_ReturnCr.dblReAcc,0) AS N'回收利息额', \r\n      0 AS N'结欠利息额', \r\n      0 AS N'结欠本利和', \r\n      CASE WHEN ISNULL(dbo.FM_ReturnCr.strChecker, N'') \r\n      = N'' THEN N'否' ELSE N'是' END AS N'是否审核'\r\nFROM dbo.FM_ReturnCr LEFT OUTER JOIN\r\n      dbo.VoucherTemplates a ON dbo.FM_ReturnCr.VT_ID = a.VT_ID inner join dbo.FM_CrBill on dbo.FM_CrBill.strCrBillID=dbo.FM_ReturnCr.strCrBillID\r\n     inner join dbo.voucherTemplates b on b.VT_ID=dbo.FM_CrBill.VT_ID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_CrRet"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423008","object_id":"column-423008","name":"日期","name_without_path":"日期","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423009","object_id":"column-423009","name":"单据模版名称","name_without_path":"单据模版名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423010","object_id":"column-423010","name":"查询单据名称","name_without_path":"查询单据名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423011","object_id":"column-423011","name":"业务编号","name_without_path":"业务编号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423012","object_id":"column-423012","name":"对应业务编号","name_without_path":"对应业务编号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423013","object_id":"column-423013","name":"投资总额","name_without_path":"投资总额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423014","object_id":"column-423014","name":"回收本金额","name_without_path":"回收本金额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423015","object_id":"column-423015","name":"结欠本金额","name_without_path":"结欠本金额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423016","object_id":"column-423016","name":"应收利息额","name_without_path":"应收利息额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423017","object_id":"column-423017","name":"回收利息额","name_without_path":"回收利息额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423018","object_id":"column-423018","name":"结欠利息额","name_without_path":"结欠利息额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423019","object_id":"column-423019","name":"结欠本利和","name_without_path":"结欠本利和","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423020","object_id":"column-423020","name":"是否审核","name_without_path":"是否审核","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};