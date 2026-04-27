import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("nst003-home")
                NavigationLink("nst003-go") { Text("nst003-next") }
            }
            .navigationTitle("nst003-stackTitle")
        }
    }
}
