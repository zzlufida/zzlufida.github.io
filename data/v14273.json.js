window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14273","name":"vwFM_PartAcc","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_PartAcc\r\nAS\r\nSELECT dbo.FM_PartWin.dtDate AS N'日期', dbo.VoucherTemplates.VT_Name AS N'单据模版名称',\r\n      dbo.FM_PartWin.strPartWinID AS 业务编号, 0 AS N'投资金额', 0 AS N'回收投资额',\r\n      0 AS N'剩余投资额', dbo.FM_PartWin.dblMoney AS N'应收股利额',\r\n      dbo.FM_PartWin.dblReGle AS N'回收股利额', 0 AS N'结欠股利额',\r\n      0 AS N'结欠本利和',\r\n      CASE WHEN ISNULL(dbo.FM_PartWin.strChecker, N'')\r\n      = N'' THEN N'否' ELSE N'是' END AS N'是否审核',FM_PartWin.strExchName as N'币种',FM_Unit.strUnitName as N'单位名称'\r\nFROM dbo.FM_PartWin LEFT OUTER JOIN\r\n      dbo.VoucherTemplates ON dbo.FM_PartWin.VT_ID = dbo.VoucherTemplates.VT_ID Inner Join dbo.FM_Unit on FM_PartWin.strUnitCode=FM_Unit.strUnitID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_PartAcc"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423145","object_id":"column-423145","name":"日期","name_without_path":"日期","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423146","object_id":"column-423146","name":"单据模版名称","name_without_path":"单据模版名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423147","object_id":"column-423147","name":"业务编号","name_without_path":"业务编号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423148","object_id":"column-423148","name":"投资金额","name_without_path":"投资金额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423149","object_id":"column-423149","name":"回收投资额","name_without_path":"回收投资额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423150","object_id":"column-423150","name":"剩余投资额","name_without_path":"剩余投资额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423151","object_id":"column-423151","name":"应收股利额","name_without_path":"应收股利额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423152","object_id":"column-423152","name":"回收股利额","name_without_path":"回收股利额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423153","object_id":"column-423153","name":"结欠股利额","name_without_path":"结欠股利额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423154","object_id":"column-423154","name":"结欠本利和","name_without_path":"结欠本利和","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423155","object_id":"column-423155","name":"是否审核","name_without_path":"是否审核","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423156","object_id":"column-423156","name":"币种","name_without_path":"币种","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423157","object_id":"column-423157","name":"单位名称","name_without_path":"单位名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};