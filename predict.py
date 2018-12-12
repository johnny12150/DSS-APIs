import sys
import json

# for test purpose: 'python Day09.py hello world'

for index, arg in enumerate(sys.argv):
    # index 是由enumerate 產生的
    # print(index, ' ', arg)
    if index != 0:
        if index == 1:
            # python object
            prediction = {
                'param 1': arg
            }
        else:
            # add new key, value
            prediction[arg] = arg
            if index == len(sys.argv) -1:
                # format object to JSON
                print(json.dumps(prediction))
                # send JSON data back to node.js
                sys.stdout.flush()
