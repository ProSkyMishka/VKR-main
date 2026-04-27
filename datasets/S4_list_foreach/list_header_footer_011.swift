import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf011-header"), footer: Text("hf011-footer")) {
                Text("hf011-i1")
                Text("hf011-i2")
                Text("hf011-i3")
            }
        }
    }
}
