import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("nst010-home")
                NavigationLink("nst010-go") { Text("nst010-next") }
            }
            .navigationTitle("nst010-stackTitle")
        }
    }
}
