window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10554","name":"eb_view_refundreltrade","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view [dbo].[eb_view_refundreltrade]\r\nas\r\nselect distinct ro.AutoID, rd.AutoID as idetailsid, o.parentID as itradeID, o.autoID as iorderID, t.cSOID from EB_RefundOrder ro inner join EB_RefundDetails rd on ro.AutoID = rd.ParentID inner join EB_Trade t on ro.cShopID = t.cShopID and ro.tid = t.tid inner join EB_Order o on t.autoID = o.parentID and rd.cItemOID = o.cItemID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"eb_view_refundreltrade"},{"field":"Type","value":"View"}],"columns":[{"id":"column-194176","object_id":"column-194176","name":"AutoID","name_without_path":"AutoID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-194177","object_id":"column-194177","name":"idetailsid","name_without_path":"idetailsid","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-194178","object_id":"column-194178","name":"itradeID","name_without_path":"itradeID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-194179","object_id":"column-194179","name":"iorderID","name_without_path":"iorderID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-194180","object_id":"column-194180","name":"cSOID","name_without_path":"cSOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};