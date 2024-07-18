window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10577","name":"EB_View_TradePromotinMap_neweb","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW EB_View_TradePromotinMap_neweb\r\nAS\r\n SELECT isnull(igiftorderid,'')as igiftorderid,isnull(STUFF((SELECT ';' + convert(nvarchar,code) FROM (select distinct pro.igiftorderid,act.code,act.name from eb_tradepromotion  pro inner join EB_PromotionActivity act on pro.iactivityid = act.autoid  ) as q  where q.igiftorderid = t.igiftorderid   FOR XML PATH('')), 1, 1, ''),'') as actcode, isnull(STUFF((SELECT ',' + convert(nvarchar,name) FROM (select distinct pro.igiftorderid,act.code,act.name from eb_tradepromotion  pro inner join EB_PromotionActivity act on pro.iactivityid = act.autoid  ) as q  where q.igiftorderid = t.igiftorderid   FOR XML PATH('')), 1, 1, ''),'') as actname FROM eb_tradepromotion t GROUP BY igiftorderid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EB_View_TradePromotinMap_neweb"},{"field":"Type","value":"View"}],"columns":[{"id":"column-196086","object_id":"column-196086","name":"igiftorderid","name_without_path":"igiftorderid","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196087","object_id":"column-196087","name":"actcode","name_without_path":"actcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"MAX","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-196088","object_id":"column-196088","name":"actname","name_without_path":"actname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"MAX","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};