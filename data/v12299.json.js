window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12299","name":"SA_UnOutQtyForMo","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--制造提出去掉期初单据\r\nCREATE View SA_UnOutQtyForMo as  \r\nselect cwhcode,  \r\n   partid,0 as sotype,0 as sodid,  \r\n    sum(case when abs(isnull(iquantity,0))-abs(isnull(foutquantity,0))>0 then abs(isnull(iquantity,0))-abs(isnull(foutquantity,0)) else 0 end) as iquantity    \r\nfrom dispatchlists c left join bas_part b on   b.invcode=c.cinvcode \r\ninner join dispatchlist on dispatchlist.dlid= c.dlid               \r\n                                         and (isnull(B.Free1,'')='' or C.cFree1=B.Free1)   \r\n                                         and (isnull(B.Free2,'')='' or C.cFree2=B.Free2)   \r\n                                         and (isnull(B.Free3,'')='' or C.cFree3=B.Free3)   \r\n                                         and (isnull(B.Free4,'')='' or C.cFree4=B.Free4)   \r\n                                         and (isnull(B.Free5,'')='' or C.cFree5=B.Free5)   \r\n                                         and (isnull(B.Free6,'')='' or C.cFree6=B.Free6)   \r\n                                         and (isnull(B.Free7,'')='' or C.cFree7=B.Free7)   \r\n                                         and (isnull(B.Free8,'')='' or C.cFree8=B.Free8)   \r\n                                         and (isnull(B.Free9,'')='' or C.cFree9=B.Free9)   \r\n                                         and (isnull(B.Free10,'')='' or C.cFree10=B.Free10)   \r\n where  isnull(c.isosid,'') = '' and isnull(c.bsettleall,0)=0 and bfirst=0 and dDate>=(select cvalue from accinformation where csysid=N'SA' and cName=N'dStartDate')\r\n group by cwhcode, partid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SA_UnOutQtyForMo"},{"field":"Type","value":"View"}],"columns":[{"id":"column-294283","object_id":"column-294283","name":"cwhcode","name_without_path":"cwhcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-294284","object_id":"column-294284","name":"partid","name_without_path":"partid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-294285","object_id":"column-294285","name":"sotype","name_without_path":"sotype","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-294286","object_id":"column-294286","name":"sodid","name_without_path":"sodid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-294287","object_id":"column-294287","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};