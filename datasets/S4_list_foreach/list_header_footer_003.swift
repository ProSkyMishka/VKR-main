import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf003-header"), footer: Text("hf003-footer")) {
                Text("hf003-i1")
                Text("hf003-i2")
                Text("hf003-i3")
            }
        }
    }
}
