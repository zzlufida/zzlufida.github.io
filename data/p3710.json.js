window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p3710","name":"SR_PROC_SaveSR_AGJSSerItems","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SR_PROC_SaveSR_AGJSSerItems"},{"field":"Type","value":"Procedure"}],"script":null,"parameters":[{"name":"Return","description":null,"mode":"INOUT","data_type":"nvarchar(5)","custom_fields":{}},{"name":"sType","description":null,"mode":"IN","data_type":"nvarchar(10)","custom_fields":{}},{"name":"OID","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"AutoID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"VT_ID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"cAgrCodeID","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cInvCode","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"cSourceOid","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"cFree1","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"cFree2","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"cFree3","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"cFree4","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"cFree5","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"cFree6","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"cFree7","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"cFree8","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"cFree9","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"cFree10","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"fQuantity","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"cSalesUnitCode","description":null,"mode":"IN","data_type":"nvarchar(35)","custom_fields":{}},{"name":"mNatFJSSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mTaxUnitPrice","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatTaxUnitPrice","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mTaxFreeUnitPrice","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mTaxFreeSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mTaxSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mTotalSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"fTaxRate","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatTaxFreeUnitPrice","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatTaxFreeSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatTaxSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatTotalSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"fJSSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"cDefine22","description":null,"mode":"IN","data_type":"nvarchar(60)","custom_fields":{}},{"name":"cDefine23","description":null,"mode":"IN","data_type":"nvarchar(60)","custom_fields":{}},{"name":"cDefine24","description":null,"mode":"IN","data_type":"nvarchar(60)","custom_fields":{}},{"name":"cDefine25","description":null,"mode":"IN","data_type":"nvarchar(60)","custom_fields":{}},{"name":"cDefine26","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"cDefine27","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"cDefine28","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"cDefine29","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"cDefine30","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"cDefine31","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"cDefine32","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"cDefine33","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"cDefine34","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"cDefine35","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"cDefine36","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"cDefine37","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"cCreator","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"dCreatedDate","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"cModifier","description":null,"mode":"IN","data_type":"nvarchar(20)","custom_fields":{}},{"name":"dModifiedDate","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"citem_class","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"citem_cname","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"citemcode","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"citemname","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"mQuotedUnitPrice","description":null,"mode":"IN","data_type":"decimal(13, 0)","custom_fields":{}},{"name":"fDiscount","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mDiscountSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"ReturnError","description":null,"mode":"INOUT","data_type":"nvarchar(5)","custom_fields":{}}],"dependencies":null,"imported_at":"2024-07-15 13:47"};