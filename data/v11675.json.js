window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11675","name":"NE_DigestSet_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW  NE_DigestSet_View  \r\nAS    \r\n\tselect ZYItem.RowNumber,ZYItem.CardNum,ZYItem.FieldName,ZYItem.IsSelect,ZYItem.IsShow,\r\n\t\tZYLang.cCardItemName as CardName,ZYLang.cLocalID as LocalID \r\n\tfrom NE_PzSet_ZYItem as ZYItem\r\n\tinner join NE_PzSet_ZYItem_lang as ZYLang\r\n\t\ton ZYItem.CardNum=ZYLang.cCardNum and ZYItem.FieldName=ZYLang.cFieldName\r\n\twhere ZYItem.IsSelect=1 and ZYLang.cLocalID=dbo.UDF_GetLocaleID()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_DigestSet_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-249071","object_id":"column-249071","name":"RowNumber","name_without_path":"RowNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249072","object_id":"column-249072","name":"CardNum","name_without_path":"CardNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249073","object_id":"column-249073","name":"FieldName","name_without_path":"FieldName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249074","object_id":"column-249074","name":"IsSelect","name_without_path":"IsSelect","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249075","object_id":"column-249075","name":"IsShow","name_without_path":"IsShow","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249076","object_id":"column-249076","name":"CardName","name_without_path":"CardName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249077","object_id":"column-249077","name":"LocalID","name_without_path":"LocalID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};