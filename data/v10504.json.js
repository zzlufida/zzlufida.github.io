window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10504","name":"EB_View_GoodsCodeRule","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW   EB_View_GoodsCodeRule  \r\nAS  \r\nselect ID,cPrefix ,cPrefixChar ,iSize ,iOrder ,cCoverType,(isnull(replicate(cPrefixchar ,iSize - len(isnull(cPrefixchar ,0))), '') + cPrefixchar) as cPrefixStr, CONVERT(nchar, CONVERT(money, dbo.eb_goodsCodeRule.ufts), 2) AS ufts \r\nfrom eb_goodsCodeRule","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EB_View_GoodsCodeRule"},{"field":"Type","value":"View"}],"columns":[{"id":"column-191760","object_id":"column-191760","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":true,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191761","object_id":"column-191761","name":"cPrefix","name_without_path":"cPrefix","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191762","object_id":"column-191762","name":"cPrefixChar","name_without_path":"cPrefixChar","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191763","object_id":"column-191763","name":"iSize","name_without_path":"iSize","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191764","object_id":"column-191764","name":"iOrder","name_without_path":"iOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191765","object_id":"column-191765","name":"cCoverType","name_without_path":"cCoverType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191766","object_id":"column-191766","name":"cPrefixStr","name_without_path":"cPrefixStr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-191767","object_id":"column-191767","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};