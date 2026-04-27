import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("nst004-home")
                NavigationLink("nst004-go") { Text("nst004-next") }
            }
            .navigationTitle("nst004-stackTitle")
        }
    }
}
