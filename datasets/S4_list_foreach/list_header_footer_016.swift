import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf016-header"), footer: Text("hf016-footer")) {
                Text("hf016-i1")
                Text("hf016-i2")
                Text("hf016-i3")
            }
        }
    }
}
