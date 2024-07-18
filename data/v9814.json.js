window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9814","name":"AA_v_VendorClass","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view AA_v_VendorClass\r\nas\r\nselect a.*,isnull(b.cVCCode,'') as cfVCCode,(select COUNT (cVenCode)from Vendor c where c.cVCCode like\r\na.cVCCode +'%')as vcount, (select COUNT (cVenCode)from Vendor c where c.cVCCode like\r\nisnull(b.cVCCode,'') +'%') as vtotal\r\nfrom VendorClass a left join VendorClass b on a.cVCCode like b.cVCCode +'%'\r\nand(a.iVCGrade  =b.iVCGrade +1)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AA_v_VendorClass"},{"field":"Type","value":"View"}],"columns":[{"id":"column-156703","object_id":"column-156703","name":"cVCCode","name_without_path":"cVCCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156704","object_id":"column-156704","name":"cVCName","name_without_path":"cVCName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156705","object_id":"column-156705","name":"iVCGrade","name_without_path":"iVCGrade","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156706","object_id":"column-156706","name":"bVCEnd","name_without_path":"bVCEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156707","object_id":"column-156707","name":"pubufts","name_without_path":"pubufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156708","object_id":"column-156708","name":"cfVCCode","name_without_path":"cfVCCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156709","object_id":"column-156709","name":"vcount","name_without_path":"vcount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156710","object_id":"column-156710","name":"vtotal","name_without_path":"vtotal","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};