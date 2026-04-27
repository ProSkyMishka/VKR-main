import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("nst006-home")
                NavigationLink("nst006-go") { Text("nst006-next") }
            }
            .navigationTitle("nst006-stackTitle")
        }
    }
}
