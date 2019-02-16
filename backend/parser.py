from re import match


def parse_message(message):
    return message


def is_new_message(line):
    return match(r'(\d+/\d+/\d+) (\d+:\d+) - ', line)


def parse_file(file):
    message = ''
    while True:
        line = file.readline()
        print(line)
        if not line or is_new_message(line):
            yield parse_message(message)
            message = ''
        else:
            message += line

    return message
