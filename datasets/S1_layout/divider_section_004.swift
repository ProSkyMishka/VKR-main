import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds004-secA").font(.headline)
            Text("ds004-itemA").font(.body)
            Divider()
            Text("ds004-secB").font(.headline)
            Text("ds004-itemB").font(.body)
            Divider()
            Text("ds004-secC").font(.headline)
            Text("ds004-itemC").font(.body)
        }
        .padding()
    }
}
