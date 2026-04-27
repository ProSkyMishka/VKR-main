import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf002-header"), footer: Text("hf002-footer")) {
                Text("hf002-i1")
                Text("hf002-i2")
                Text("hf002-i3")
            }
        }
    }
}
