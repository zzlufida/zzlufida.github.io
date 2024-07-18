window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12628","name":"v_AA_VouchersDigestDetail_Set","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_AA_VouchersDigestDetail_Set\r\nas \r\nselect a.cSubID,a.cMakeType,a.cfield,a.iOrder,b.localeid,case when a.cfield like 'cDigsetDefine%' and ISNULL(c.cfieldvalue,'')<>'' then b.ccaption+':'+ c.cfieldvalue else b.ccaption end as ccaption,c.cfieldvalue \r\n\tfrom AA_VouchersDigestDetail_Set a \r\n\tleft join AA_VouchersDigestDetail_lang b on \r\n\t\ta.cSubID=b.cSubID and a.cMakeType=b.cMakeType and a.cfield=b.cfield\r\n\tleft join AA_VouchersDigestDefine c on\r\n\t\ta.cSubID=c.cSubID and a.cMakeType=c.cMakeType and a.cfield=c.cfield and b.localeid =c.localeid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_AA_VouchersDigestDetail_Set"},{"field":"Type","value":"View"}],"columns":[{"id":"column-314622","object_id":"column-314622","name":"cSubID","name_without_path":"cSubID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314623","object_id":"column-314623","name":"cMakeType","name_without_path":"cMakeType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314624","object_id":"column-314624","name":"cfield","name_without_path":"cfield","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314625","object_id":"column-314625","name":"iOrder","name_without_path":"iOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314626","object_id":"column-314626","name":"localeid","name_without_path":"localeid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314627","object_id":"column-314627","name":"ccaption","name_without_path":"ccaption","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"711","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314628","object_id":"column-314628","name":"cfieldvalue","name_without_path":"cfieldvalue","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"510","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};