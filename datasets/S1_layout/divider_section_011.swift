import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds011-secA").font(.headline)
            Text("ds011-itemA").font(.body)
            Divider()
            Text("ds011-secB").font(.headline)
            Text("ds011-itemB").font(.body)
            Divider()
            Text("ds011-secC").font(.headline)
            Text("ds011-itemC").font(.body)
        }
        .padding()
    }
}
