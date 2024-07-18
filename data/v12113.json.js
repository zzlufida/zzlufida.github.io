window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12113","name":"rel_BorrowOutChange_Deliver","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view rel_BorrowOutChange_Deliver\r\nas\r\nselect distinct BorrowOutChangeItem.ID as  BorrowOutChange_id,DeliverItem.ID as Deliver_id \r\nfrom HY_DZ_BorrowOutChanges BorrowOutChangeItem\r\nleft join DispatchLists DispatchListItem on BorrowOutChangeItem.AutoID=DispatchListItem.icoridlsid\r\nleft join rdrecords32 DeliverItem on  DispatchListItem.iDLsID=DeliverItem.iDLsID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"rel_BorrowOutChange_Deliver"},{"field":"Type","value":"View"}],"columns":[{"id":"column-280345","object_id":"column-280345","name":"BorrowOutChange_id","name_without_path":"BorrowOutChange_id","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280346","object_id":"column-280346","name":"Deliver_id","name_without_path":"Deliver_id","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};