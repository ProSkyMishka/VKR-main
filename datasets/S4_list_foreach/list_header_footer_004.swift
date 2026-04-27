import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf004-header"), footer: Text("hf004-footer")) {
                Text("hf004-i1")
                Text("hf004-i2")
                Text("hf004-i3")
            }
        }
    }
}
