window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13973","name":"V_ST_SN_pos11","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view V_ST_SN_pos11\r\nas\r\n\r\nselect rdsid as autoid,rdid as id,InvPosition.cposcode as cposition ,cposname as cposname ,sum(iquantity) as iquantity\r\nfrom dbo.InvPosition inner join  position on InvPosition.cposcode=position.cposcode\r\ninner join  inventory on InvPosition.cinvcode=inventory.cinvcode\r\nwhere isnull(csource,'')='' and inventory.bSerial=1 and cvouchtype =N'11'\r\ngroup by rdid,InvPosition.cposcode, rdsid,cposname","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_ST_SN_pos11"},{"field":"Type","value":"View"}],"columns":[{"id":"column-410368","object_id":"column-410368","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-410369","object_id":"column-410369","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-410370","object_id":"column-410370","name":"cposition","name_without_path":"cposition","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-410371","object_id":"column-410371","name":"cposname","name_without_path":"cposname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-410372","object_id":"column-410372","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};